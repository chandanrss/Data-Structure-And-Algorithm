// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. 
// Return the maximized sum.

 

// Example 1:

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.
// Example 2:

// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.


function pairMin(a,b){
    if(a>b){
        return b;
    }else return a;
}

var arrayPairSum = function(nums) {
    //sorting
    let newNums = nums.sort((a,b)=> a-b);
    let minSum = 0;
    console.log(newNums);
    for (let i = 0; i < nums.length; i++) {
        minSum+= pairMin(nums[i], nums[i+1]);
        i++;
    }
    return minSum;
};



let a = [6,2,6,5,1,2];

console.log(arrayPairSum(a));


// Explanation:
// Sorting: O(n log n) — The dominant operation.

// Loop: O(n/2) → simplified as O(n) for big-O.

// Total Time Complexity: O(n log n)

// 👀 Visual Comparison:
// Assume n = 1000:

// O(n) → ~1000 operations

// O(n/2) → ~500 operations (but still considered linear)

// O(n log n) → ~1000 × log₂(1000) ≈ 1000 × 10 = ~10,000 operations

// Even though log n grows slowly, multiplying it with n gives a steeper curve than plain O(n).