// Level 11 — Call provided function with args (10 calls)
// Helper provided for students; call it 10 times and save results to descriptive consts.

export function reportScore(playerName, score) {
  return playerName + " scored " + score + " points";
}

const avaScoreReport = reportScore("Ava", 0);
const rolazarScore = reportScore("Rolazar", 21);
const bobScore = reportScore("Bob", 13);
const janeScore = reportScore("Jane", 10);

export default bobScore;
