// N Factor Number
// Given a number n, find the number of ways to get n using 1, 3, and 4.
// The number of ways to get n is the sum of the number of ways to get (n-1), (n-3), and (n-4).

// Example 1:

// Input: n = 4
// Output: 4
// Explanation: There are four ways to get 4:
// 1 + 1 + 1 + 1
// 1 + 1 + 3
// 1 + 3 + 1
// 3 + 1
// Example 2:
// Input: n = 5
// Output: 5        



function waytoGetN(dp, n) {
    if (n === 0 || n === 1) return 1;
    if (n === 2) return 1;
    if (n === 3) return 2;
  
    if (dp[n] === 0) {
      let s1 = waytoGetN(dp, n - 1);
      let s2 = waytoGetN(dp, n - 3);
      let s3 = waytoGetN(dp, n - 4);
      dp[n] = s1 + s2 + s3;
      console.log(dp[n]);
    }
    return dp[n];
  }
  
  // Initialize dp array with zeros
  function initializeDp(n) {
    const dp = new Array(n + 1).fill(0);
    console.log(dp);
    return dp;
  }
  
  // Example usage
  const n = 4;
  const dp = initializeDp(n);
  console.log(`Ways to get ${n}:`, waytoGetN(dp, n));