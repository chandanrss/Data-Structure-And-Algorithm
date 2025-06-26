// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function (x) {
  // if x is -ve, return false simply.
  let isNeg = x < 0;
  if (isNeg) return false;

  x = y = Math.abs(x);
  let res = 0;
  let newInt = 0;
  function helper(x, res = 0) {
    console.log("x: ", x, "Res: ", res);
    if (x === 0) {
      return res;
    }

    newInt = res * 10 + (x % 10);
    let temp = Math.floor(x / 10);

    console.log("x`: ", temp, "Res:` ", newInt);
    console.log("------------------------");
    
    return helper(temp, newInt);
  }

  const rev = helper(x);
  return y === rev;
};

console.log(isPalindrome(-12321));
// console.log(isPalindrome(-10));
