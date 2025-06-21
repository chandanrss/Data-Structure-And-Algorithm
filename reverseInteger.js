// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

var reverse = function (x) {
  const isNeg = x < 0;
  x = Math.abs(x);

  function helper(n, res) {
    if (n === 0) return res;
    return helper(Math.floor(n / 10), res * 10 + (n % 10));
  }
  let reversed = helper(x, 0);
  if (isNeg) reversed = -reversed;

  // 32-bit signed integer range check
  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) return 0;
  return reversed;
};

let x = -3456;

console.log(reverse(x));
