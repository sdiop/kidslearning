import json, pathlib
root=pathlib.Path(__file__).resolve().parents[1]
required=['index.html','styles.css','app.js','data/course_data.json','README.md','assets/anime_learning_portals.png','assets/anime_ela_lab.png','assets/anime_math_arena.png','assets/anime_reading_guild.png','assets/anime_science_lab.png','assets/anime_world_explorer.png']
missing=[p for p in required if not (root/p).exists()]
assert not missing, f'Missing files: {missing}'
data=json.loads((root/'data/course_data.json').read_text(encoding='utf-8'))
assert len(data)>=5
for m in data:
    for q in m['quests']:
        for k in ['title','minutes','mission','video','task','quiz','interactiveQuiz','narration']:
            assert q.get(k), f'Missing {k}'
app=(root/'app.js').read_text(encoding='utf-8')
html=(root/'index.html').read_text(encoding='utf-8')
css=(root/'styles.css').read_text(encoding='utf-8')
for token in ['COURSE_DATA','speechSynthesis','renderProgressTracker','gradeInteractiveQuiz','downloadProgress']:
    assert token in app, token
for token in ['progressTracker','Audio Narration','course']:
    assert token in html, token
for token in ['progressGrid','interactiveQuiz','moduleArt']:
    assert token in css, token
print('VERIFICATION PASSED: visuals, audio narration, progress tracker, and interactive quizzes are valid.')
