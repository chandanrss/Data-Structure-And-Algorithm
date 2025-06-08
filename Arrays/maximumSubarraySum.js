// Maximum Subarray Sum - Kadane's Algorithm
// Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.

// Examples:

// Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

// Input: arr[] = {-2, -4}
// Output: -2
// Explanation: The subarray {-2} has the largest sum -2.

// Input: arr[] = {5, 4, 1, 7, 8}
// Output: 25
// Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.

var maxSubArrSum = function (arr) {
  var maxSum = 0;
  arr.forEach((element, i) => {
    let tempSum = 0;
    for (let j = i; j < arr.length; j++) {
      tempSum += arr[j];
      
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    }
    console.log(maxSum);
  });
  console.log("final Sum:", maxSum);
  return maxSum;
};

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubArrSum(arr));
