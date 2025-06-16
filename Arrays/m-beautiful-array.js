// An array nums of length n is beautiful if:

// nums is a permutation of the integers in the range [1, n].
// For every 0 <= i < j < n, there is no index k with i < k < j where 2 * nums[k] == nums[i] + nums[j].
// Given the integer n, return any beautiful array nums of length n. There will be at least one valid answer for the given n.

// Example 1:

// Input: n = 4
// Output: [2,1,4,3]
// Example 2:

// Input: n = 5
// Output: [3,1,2,5,4]

var beautifulArray = function (n) {
  //let'say
  let result = [1];

  while (result.length < n) {
    let temp = [];

    for (let x of result) {
      if (x * 2 - 1 <= n) {
        temp.push(x * 2 - 1);
      }
    }

    for (let x of result) {
      if (x * 2 <= n) {
        temp.push(x * 2);
      }
    }

    result = temp;
  }

  return result;
};

console.log(beautifulArray(4)); // Output could be: [1,3,2,4] or [2,1,4,3]

//Explaination

// Start with [1] — a trivially beautiful array.

// Then construct larger arrays using:

// 2 * x - 1 to generate odd numbers

// 2 * x to generate even numbers

// Combine the two, and repeat until the array reaches size n.

// This guarantees that no element will be the arithmetic mean of any two other elements between it.