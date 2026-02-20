// Find maximum sum of contiguous subarray.

// Example:

// [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6  // [4,-1,2,1]

function maxSubArrSum(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  let subArr = [];
  for (let i = 1; i < nums.length - 1; i++) {
    const element = nums[i];
    // subArr.push(element);
    currentSum = Math.max(element, currentSum + element);
    maxSum = Math.max(maxSum, currentSum);

   
  }
  return maxSum;
}

const tempArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Final O/P: ", maxSubArrSum(tempArr));
