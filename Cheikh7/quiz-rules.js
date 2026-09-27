(function (root, factory) {
  const rules = factory();
  if (typeof module === 'object' && module.exports) module.exports = rules;
  root.QuizRules = rules;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const MAX_ATTEMPTS = 3;

  function normalizeAttempts(attempts) {
    return Array.isArray(attempts)
      ? attempts.slice(0, MAX_ATTEMPTS).map(value => Math.max(0, Math.min(100, Number(value) || 0)))
      : [];
  }

  function compositeScore(attempts) {
    const values = normalizeAttempts(attempts);
    return values.length
      ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length)
      : 0;
  }

  function isExhausted(attempts) {
    const values = normalizeAttempts(attempts);
    return values.length >= MAX_ATTEMPTS || values.some(value => value >= 100);
  }

  function isMastered(score, threshold) {
    return Number.isFinite(Number(score)) && Number(score) >= (threshold == null ? 90 : threshold);
  }

  function xpAwardFor(score, alreadyAwarded, threshold, amount) {
    return isMastered(score, threshold) && !alreadyAwarded ? amount : 0;
  }

  return { MAX_ATTEMPTS, normalizeAttempts, compositeScore, isExhausted, isMastered, xpAwardFor };
});