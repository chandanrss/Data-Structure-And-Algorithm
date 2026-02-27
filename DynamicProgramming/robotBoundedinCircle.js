// Robot Circular Path Problem You are given an array of instruction strings.
// Each instruction string consists of characters:

// 'G' → move forward 1 unit
// 'L' → turn left 90°
// 'R' → turn right 90°

// The robot:
// Starts at position (0,0)
// Initially faces North

// For each instruction string:

// The robot executes the full string once
// Then repeats that same instruction infinitely

// Return an array of "YES" or "NO":

// "YES" → robot remains in a bounded circle
// "NO" → robot moves infinitely away

// 🔹 Example
// Input:
// ["G", "GLG", "GGLLGG"]
// Output:
// ["NO", "YES", "YES"]

// Core Logic Recap

// After executing the instruction once:
// Robot is bounded if:

// It returns to (0,0)
// OR
// It is NOT facing North

// Otherwise → infinite → "NO"

function isRobotBounded(instructions) {
  let x = 0,
    y = 0;
  let direction = 0;
  // 0 = North, 1 = East, 2 = South, 3 = West

  for (let move of instructions) {
    if (move === "G") {
      if (direction === 0) y++;
      else if (direction === 1) x++;
      else if (direction === 2) y--;
      else if (direction === 3) x--;
    } else if (move === "L") {
      direction = (direction + 3) % 4;
    } else if (move === "R") {
      direction = (direction + 1) % 4;
    }
  }

  return (x === 0 && y === 0) || direction !== 0;
}

function robotCircularPath(arr) {
  let result = [];

  for (let element of arr) {
    let bounded = isRobotBounded(element);
    result.push(bounded ? "YES" : "NO");
  }

  return result;
}


// let tempArr = ["G", "GLG", "GGLLGG"];
// let tempArr = ["GGGLLGG","GLGLGGLR"];
let tempArr=["G", "GL", "GGLLGG", "GLR", "LLLL"];
console.log(robotCircularPath(tempArr));