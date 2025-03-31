// Given an integer array nums, find the subarray with the largest sum, and return its sum.
 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


// ---------------------------------------Solution---------------------------------------


var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let tempSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    tempSum = tempSum + nums[i];

    // Add the current element or start a new subarray
    // if (tempSum < nums[i]) tempSum = nums[i];
    // or
    tempSum = Math.max(nums[i], tempSum);

    // Update maxSum if tempsum is greater
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
