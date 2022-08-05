function guessingGame() {
  const ANSWER = Math.floor(Math.random() * 100);
  let numGuesses = 0;
  let gameOver = false;

  return function guess(num) {
    if (gameOver) return "The game is over, you already won!";
    numGuesses++;
    if (num === ANSWER) {
      gameOver = true;
      return `You win! You found ${ANSWER} in ${numGuesses} guesses.`;
    }
    if (num < ANSWER) return `${num} is too low!`;
    if (num > ANSWER) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
