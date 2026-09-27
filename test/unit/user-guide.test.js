const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..', '..', 'Cheikh7');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');

test('landing page has an accessible guide dialog and stable media references', () => {
  assert.match(html, /<dialog[^>]+id="userGuideDialog"/);
  assert.match(html, /aria-labelledby="userGuideTitle"/);
  assert.match(html, /id="userGuideTitle"/);
  assert.match(html, /src="\/assets\/user-guide\.mp4"/);
  assert.match(html, /poster="\/assets\/user-guide-poster\.jpg"/);
  assert.match(html, /src="\/assets\/user-guide\.vtt"/);
  assert.match(html, /kind="captions"/);
  assert.match(html, /How to use this app/);
  for (const asset of ['user-guide.mp4', 'user-guide-poster.jpg', 'user-guide.vtt']) {
    assert.equal(fs.existsSync(path.join(root, 'assets', asset)), true, `${asset} must exist`);
  }
});

test('first-visit state and both welcome actions are wired defensively', () => {
  assert.match(app, /diopYabaUserGuideDismissed/);
  assert.match(app, /localStorage\.getItem\(GUIDE_DISMISSAL_KEY\)/);
  assert.match(app, /catch \(error\) \{ return false; \}/);
  assert.match(app, /function watchUserGuide\(\)/);
  assert.match(app, /function startExploring\(\)/);
  assert.match(app, /video\.play\(\)/);
  assert.match(app, /video\.pause\(\)/);
});

test('guide supports Escape, focus restoration, chapter seeking, and media fallback', () => {
  assert.match(app, /addEventListener\('cancel'/);
  assert.match(app, /guideReturnFocus\.focus\(\)/);
  assert.match(app, /data-guide-time/);
  assert.match(app, /video\.currentTime = time/);
  assert.match(app, /showGuideFallback/);
  assert.match(html, /id="guideFallback"[^>]+hidden/);
  assert.match(html, /data-guide-time="139\.845">Reopen this guide/);
});

test('service worker precaches lightweight guide assets but runtime-caches the MP4', () => {
  const shell = sw.match(/const APP_SHELL = \[([\s\S]*?)\];/)[1];
  assert.match(shell, /user-guide-poster\.jpg/);
  assert.match(shell, /user-guide\.vtt/);
  assert.doesNotMatch(shell, /user-guide\.mp4/);
  assert.match(sw, /requestUrl\.pathname === '\/assets\/user-guide\.mp4'/);
  assert.match(sw, /cache\.put\(event\.request, copy\)/);
  assert.match(sw, /diop-yaba-academy-v2/);
});