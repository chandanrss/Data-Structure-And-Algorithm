
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]



var permute = function(nums) {
    let result = [];
  
    // Helper function for backtracking
    const backtrack = (start) => {
      // Base case: If start reaches the end, store a copy
      if (start === nums.length) {
        result.push([...nums]);
        return;
      }
  
      for (let i = start; i < nums.length; i++) {
        // Swap to create a new permutation
        [nums[start], nums[i]] = [nums[i], nums[start]];
  
        // Recur with the next position
        backtrack(start + 1);
  
        // Backtrack to restore original order
        [nums[start], nums[i]] = [nums[i], nums[start]];
      }
    };
  
    backtrack(0);
    return result;
  };
  
  console.log(permute([1, 2, 3]));
  // Output: [
  //   [1, 2, 3], [1, 3, 2],
  //   [2, 1, 3], [2, 3, 1],
  //   [3, 2, 1], [3, 1, 2]
  // ]