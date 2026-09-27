import json, pathlib
root=pathlib.Path(__file__).resolve().parents[1]
required=['index.html','styles.css','app.js','data/course_data.json','README.md']
missing=[p for p in required if not (root/p).exists()]
assert not missing, missing
data=json.loads((root/'data/course_data.json').read_text(encoding='utf-8'))
assert len(data)==5
for m in data:
    assert m['quests']
    for q in m['quests']:
        assert q['quiz'] and q['task'] and q['video']
app=(root/'app.js').read_text(encoding='utf-8')
for token in ['renderProgressTracker','downloadProgress','speechSynthesis','gradeQuiz']:
    assert token in app, token
print('VERIFICATION PASSED: 5th grade course package is valid.')
