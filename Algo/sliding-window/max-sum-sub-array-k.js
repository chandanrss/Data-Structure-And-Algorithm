// Problem

// Find max sum of subarray of size k

// Example:

// arr = [1,4,2,10,23,3,1,0,20]
// k = 4
//
//  Why Sliding Window?

// Instead of recalculating sum each time:

// Add next element

// Remove first element

function maxSumSubArr(nums, k){

    let maxSum = 0

    let windowSum = 0;
    // Get Sum of K element first
    for (let i = 0; i < k; i++) {
        const element = nums[i];
        windowSum+= element;
    }

    maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        const element = nums[i];
        windowSum += element  - nums[i - k];
        maxSum = Math.max(windowSum, maxSum);
        
    }

    return maxSum;
}

const tempArr = [1,4,2,10,23,3,1,0,20];
const k = 4;
console.log("Final O/P: ", maxSumSubArr(tempArr, k));
