function initScoring() {
  return { streak: 0, attempts: 0, successes: 0 };
}

function recordAttempt(scoring, correct) {
  return {
    streak: correct ? scoring.streak + 1 : 0,
    attempts: scoring.attempts + 1,
    successes: correct ? scoring.successes + 1 : scoring.successes,
  };
}

function getSuccessRate(scoring) {
  if (scoring.attempts === 0) return 0;
  return Math.round((scoring.successes / scoring.attempts) * 100);
}
