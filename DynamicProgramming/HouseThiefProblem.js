
// House Thief Problem
// The problem is to find the maximum amount of money the thief can steal without alerting the police.
// The thief cannot steal from two adjacent houses, as it will alert the police.
// The function takes an array of integers representing the amount of money in each house and returns the maximum amount of money that can be stolen.
// The function uses dynamic programming to solve the problem.
// The idea is to use a dp array where dp[i] represents the maximum amount of money that can be stolen from the first i houses.
// The maximum amount of money that can be stolen from the first i houses is the maximum of two options:
// 1. Steal from the current house and add it to the maximum amount of money that can be stolen from the first i-2 houses.
// 2. Skip the current house and take the maximum amount of money that can be stolen from the first i-1 houses.
// The base case is when there are no houses left to steal from, in which case the maximum amount of money that can be stolen is 0. 

//Example:
// Input: houses = [6, 7, 1, 30, 8, 2, 4]
// Output: 41
// Explanation: The maximum amount of money that can be stolen is 41, by stealing from houses 1, 3, and 5 (7 + 30 + 4 = 41).
// The function uses memoization to store the results of subproblems in a dp array to avoid redundant calculations.
// The time complexity of the function is O(n), where n is the number of houses, and the space complexity is O(n) due to the dp array.


function maxProfit(dp, houses, index = 0) {
    if (index >= houses.length) return 0; // Base case: no houses left to steal
  
    if (dp[index] === 0) {
      // Option 1: Steal the current house and move to the house two steps ahead
      let stealCurrentHouse = houses[index] + maxProfit(dp, houses, index + 2);
  
      // Option 2: Skip the current house and move to the next house
      let skipCurrentHouse = maxProfit(dp, houses, index + 1);
  
      // Store the maximum profit in dp
      dp[index] = Math.max(stealCurrentHouse, skipCurrentHouse);
    }
  
    return dp[index];
  }
  
  // Initialize dp array with zeros
  function initializeDp(n) {
    return new Array(n).fill(0);
  }
  
  // Example usage
  const houses = [6, 7, 1, 30, 8, 2, 4];
  const dp = initializeDp(houses.length);
  console.log(`Max Profit:`, maxProfit(dp, houses, 0));