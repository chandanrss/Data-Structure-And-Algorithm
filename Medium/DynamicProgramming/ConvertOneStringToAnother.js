//Convert One String to Another using Minimum Operations
// Given two strings str1 and str2, find the minimum number of operations required to convert str1 to str2.
// The allowed operations are:
// 1. Insert a character
// 2. Remove a character
// 3. Replace a character
// The function uses dynamic programming to solve the problem.  

//Example:
// Input: str1 = "sunday", str2 = "saturday"
// Output: 3
// Explanation: The minimum number of operations required to convert "sunday" to "saturday" is 3:
// 1. Insert 'a' at index 2
// 2. Insert 't' at index 3
// 3. Replace 'y' with 'r'
// The function uses memoization to store the results of subproblems in a dp array to avoid redundant calculations.
// The time complexity of the function is O(m * n), where m and n are the lengths of str1 and str2, respectively.
// The space complexity is O(m * n) due to the dp array.
// The function takes two strings str1 and str2, and two indices index1 and index2 representing the current position in str1 and str2, respectively.
// The function returns the minimum number of operations required to convert str1 to str2 starting from index1 and index2.
// The function uses recursion and memoization to solve the problem.
// The base case is when one of the strings is empty, in which case the minimum number of operations required is the length of the other string.
// The function checks if the characters at index1 and index2 are equal. If they are, it moves to the next characters in both strings.
// If they are not equal, it calculates the minimum number of operations required for each of the three allowed operations (insert, remove, replace) and stores the result in the dp array.
// The function returns the minimum number of operations required to convert str1 to str2 starting from index1 and index2.
// The function uses memoization to store the results of subproblems in a dp array to avoid redundant calculations.
// The time complexity of the function is O(m * n), where m and n are the lengths of str1 and str2, respectively.
// The space complexity is O(m * n) due to the dp array.
// The function takes two strings str1 and str2, and two indices index1 and index2 representing the current position in str1 and str2, respectively.
// The function returns the minimum number of operations required to convert str1 to str2 starting from index1 and index2.


function minOperations(dp, str1, str2, index1, index2) {
  if (index1 === str1.length) return str2.length - index2; // Base case: str1 is empty
  if (index2 === str2.length) return str1.length - index1; // Base case: str2 is empty

  if (dp[index1][index2] === -1) {
    if (str1[index1] === str2[index2]) {
      dp[index1][index2] = minOperations(
        dp,
        str1,
        str2,
        index1 + 1,
        index2 + 1
      );
    } else {
      let insert = minOperations(dp, str1, str2, index1, index2 + 1) + 1;
      let remove = minOperations(dp, str1, str2, index1 + 1, index2) + 1;
      let replace = minOperations(dp, str1, str2, index1 + 1, index2 + 1) + 1;
      dp[index1][index2] = Math.min(insert, remove, replace);
    }
  }
  return dp[index1][index2];
}

// Initialize dp array with -1
function initializeDp(m, n) {
  const dp = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  return dp;
}

// Example usage
const str1 = "sunday";
const str2 = "saturday";
const dp = initializeDp(str1.length, str2.length);
console.log(`Min Operations:`, minOperations(dp, str1, str2, 0, 0));
