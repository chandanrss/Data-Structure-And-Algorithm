// Given an array of integers (arr), divide it into two subsets A and B such that:

// A ∩ B = ∅ and A ∪ B = arr

// The sum of A > sum of B

// The number of elements in A is minimal

// If multiple answers exist, return the one with the maximum total weight

// Return A in increasing order

function minimalHeaviestSetA(arr) {
  // Step 1: Sort array in descending order
  arr.sort((a, b) => b - a);

  let totalSum = arr.reduce((a, b) => a + b, 0);
  let subsetA = [];
  let subsetSum = 0;

  for (let weight of arr) {
    subsetA.push(weight);
    subsetSum += weight;
    if (subsetSum > totalSum - subsetSum) {
      break;
    }
  }

  // Step 2: Return subset A in increasing order
  return subsetA.sort((a, b) => a - b);
}

// Example usage:
const input = [3, 7, 5, 6, 2];
console.log(minimalHeaviestSetA(input));  // Output: [6, 7]



// Sort in descending order to always consider the largest elements first.

// Keep adding to subset A until the sum of A > sum of B.

// Once the condition is met, stop (ensures minimal size).

// Return the result sorted in ascending order.