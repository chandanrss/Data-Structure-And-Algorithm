// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Sol 1

//Brute Force
var climbStairs = function (n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// console.log(climbStairs(3));
// TC = O(2^)
// Very slow because of repeated calculations.



//
// Sol 2
//

//Dynamic Programing (Memorization)

function climbStairsDP(n) {
  let memory = {};
  function dp(n) {
    if (n <= 2) return n;

    if (memory[n]) return memory[n];

    memory[n] = dp(n - 1) + dp(n - 2);
    return memory[n];
  }

  return dp(n);
}

console.log(climbStairsDP(5));


// TC = O(n)
// SP = O(n)



// Sol 3
// Optimized DP (Best Solution)
//
function climbStairs(n) {
    if (n <= 2) return n;

    let prev1 = 2;
    let prev2 = 1;

    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}