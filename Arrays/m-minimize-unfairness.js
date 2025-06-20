// This problem is a classic variation of the "Minimize Unfairness" or "Min Max Difference in a Window".

// Problem Summary
// Given:

// An array of integers

// A number k — size of the subset to choose

// Goal:
// Choose k integers such that the difference between the maximum and minimum of those k numbers is minimized.

// Input (Sample 0)
// ini
// Copy
// Edit
// n = 7
// k = 3
// arr = [10, 100, 300, 200, 1000, 20, 30]

var minimizeUnfairness = function (k, arr) {

  //sorting the arr
  arr.sort((a, b) => a - b);

  let min = Infinity;
  for (let i = 0; i < arr.length - k; i++) {
    const unfairness = arr[i + k - 1] - arr[i];

    if (unfairness < min) min = unfairness;
  }
  return min;
};

const arr = [10, 100, 300, 200, 1000, 20, 30];
const k = 3;

console.log(minimizeUnfairness(k, arr)); // Output: 20
