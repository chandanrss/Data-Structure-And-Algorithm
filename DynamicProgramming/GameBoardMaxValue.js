// Example usage:
// const gameBoard = [10, 5, 3, 8, 2];
const gameBoard = [2, -3, 5, -1, 4, -2, 3];
const k = 2;
console.log(p(gameBoard, k)); // Output: 13

//Starting from Zero Index (Gameplay)
function gainMaxValueGamePlay(gameBoard, k) {
  let gameBoardLength = gameBoard.length;
  let sum = 0;
  for (let i = 0; i < gameBoardLength; i = i + k) {
    sum += gameBoard[i];
  }
  return sum;
}

// Starting from Any Index
function gainMaxValueAnyIndex(gameBoard, k) {
  let gameBoardLength = gameBoard.length;
  // Create an array to store the maximum gain from each position
  let maxGain = new Array(gameBoardLength).fill(0);

  // Start from the end and move backward
  for (let i = gameBoardLength - 1; i >= 0; i--) {
    // Get the current position value
    let currentScore = gameBoard[i];
    // If we can jump to a valid next position, add its max gain
    if (i + k < gameBoardLength) {
      currentScore += maxGain[i + k];
    }
    // Store the maximum gain from this position
    maxGain[i] = currentScore;
  }

  // Return the maximum value found in the entire array
  return Math.max(...maxGain);
}

