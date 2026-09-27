#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/scripts/build-user-guide"
ASSETS="$ROOT/Cheikh7/assets"
VOICE="/tmp/piper-voices/en_GB-alan-medium.onnx"
VOICE_JSON="/tmp/piper-voices/en_GB-alan-medium.onnx.json"
WORK="$OUT/work"
mkdir -p "$WORK" "$OUT/captures"
test -s "$VOICE" && test -s "$VOICE_JSON"
command -v piper >/dev/null; command -v ffmpeg >/dev/null; command -v ffprobe >/dev/null
rm -f "$WORK"/line-*.wav "$WORK"/line-processed-*.wav "$WORK"/chapter-*.mp4 "$WORK"/mid-*.jpg "$WORK"/voice.wav

duration() { ffprobe -v error -show_entries format=duration -of csv=p=0 "$1" | tr -d '\r'; }
vtt_time() {
  awk -v s="$1" 'BEGIN { h=int(s/3600); m=int((s-h*3600)/60); x=s-h*3600-m*60; printf "%02d:%02d:%06.3f",h,m,x }'
}

# Piper is intentionally invoked once per sentence. Processing each sentence
# independently preserves natural punctuation pauses and gives authoritative
# cue durations for the captions.
i=0
while IFS= read -r line || [[ -n "$line" ]]; do
  [[ -z "$line" ]] && continue
  printf '%s\n' "$line" > "$WORK/line-$i.txt"
  piper --model "$VOICE" --config "$VOICE_JSON" --input_file "$WORK/line-$i.txt" --output_file "$WORK/line-$i.wav"
  ffmpeg -nostdin -hide_banner -loglevel error -y -i "$WORK/line-$i.wav" \
    -af "rubberband=pitch=1.17:formant=preserved,acompressor=threshold=-18dB:ratio=3:attack=8:release=80,equalizer=f=2800:t=q:w=1:g=2,loudnorm=I=-16:TP=-1.5:LRA=7" \
    "$WORK/line-processed-$i.wav"
  i=$((i+1))
done < "$OUT/narration-lines.txt"
[[ "$i" -eq 20 ]] || { echo "expected 20 narration lines, got $i" >&2; exit 1; }

printf 'WEBVTT\n\n' > "$OUT/user-guide.vtt"
start=0
for i in $(seq 0 19); do
  n=$(printf '%02d' $((i+1)))
  wav="$WORK/line-processed-$i.wav"
  adur=$(duration "$wav")
  end=$(awk -v s="$start" -v d="$adur" 'BEGIN { printf "%.3f", s+d }')
  printf '%s --> %s\n' "$(vtt_time "$start")" "$(vtt_time "$end")" >> "$OUT/user-guide.vtt"
  sed -n "$((i+1))p" "$OUT/narration-lines.txt" >> "$OUT/user-guide.vtt"
  printf '\n' >> "$OUT/user-guide.vtt"
  # The half-second tail is picture-only, allowing the final state to settle.
  target=$(awk -v d="$adur" 'BEGIN { printf "%.3f", d+0.5 }')
  clip=$(find "$OUT/captures" -maxdepth 1 -type f -name "$n-*.webm" -print -quit)
  [[ -s "$clip" ]] || { echo "missing capture $n" >&2; exit 1; }
  vdur=$(duration "$clip")
  factor=$(awk -v t="$target" -v v="$vdur" 'BEGIN { if (v>t) printf "%.6f",t/v; else print "1" }')
  title=$(sed -n "$((i+1))p" "$OUT/narration-lines.txt" | cut -c1-42)
  vf="setpts=${factor}*PTS,trim=duration=${target},tpad=stop_mode=clone:stop_duration=30,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='CHAPTER $n':x=36:y=28:fontsize=25:fontcolor=white:box=1:boxcolor=black@0.62:boxborderw=10"
  ffmpeg -nostdin -hide_banner -loglevel error -y -i "$clip" -i "$wav" \
    -filter_complex "[0:v]$vf[v];[1:a]apad=pad_dur=0.5[a]" \
    -map '[v]' -map '[a]' -t "$target" -c:v libx264 -pix_fmt yuv420p -r 30 \
    -c:a aac -b:a 128k "$WORK/chapter-$n.mp4"
  # Midpoint evidence frame, one and only one per chapter.
  mid=$(awk -v t="$target" 'BEGIN { printf "%.3f",t/2 }')
  ffmpeg -nostdin -hide_banner -loglevel error -y -ss "$mid" -i "$WORK/chapter-$n.mp4" -frames:v 1 -vf scale=320:180 "$WORK/mid-$n.jpg"
  start=$(awk -v s="$start" -v d="$target" 'BEGIN { printf "%.3f", s+d }')
done

printf "file '%s'\n" "$WORK"/chapter-*.mp4 > "$WORK/video-list.txt"
ffmpeg -nostdin -hide_banner -loglevel error -y -f concat -safe 0 -i "$WORK/video-list.txt" \
  -c copy "$ASSETS/user-guide.mp4"
cp "$OUT/user-guide.vtt" "$ASSETS/user-guide.vtt"
ffmpeg -nostdin -hide_banner -loglevel error -y -i "$ASSETS/user-guide.mp4" -frames:v 1 "$ASSETS/user-guide-poster.jpg"
ffmpeg -nostdin -hide_banner -loglevel error -y -pattern_type glob -i "$WORK/mid-*.jpg" \
  -vf "tile=5x4:padding=4:margin=4" -frames:v 1 "$OUT/review-contact-sheet.jpg"

ffprobe -v error -select_streams v:0 -show_entries stream=width,height,codec_name \
  -of csv=p=0 "$ASSETS/user-guide.mp4" | grep -Fx 'h264,1280,720'
ffprobe -v error -select_streams a:0 -show_entries stream=codec_name \
  -of csv=p=0 "$ASSETS/user-guide.mp4" | grep -Fx 'aac'
ffmpeg -nostdin -v error -i "$ASSETS/user-guide.mp4" -f null -
echo "Built $(duration "$ASSETS/user-guide.mp4") seconds: $ASSETS/user-guide.mp4"