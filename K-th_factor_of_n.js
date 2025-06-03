// The kth Factor of n

// You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

 

// Example 1:

// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.
// Example 2:

// Input: n = 7, k = 2
// Output: 7
// Explanation: Factors list is [1, 7], the 2nd factor is 7.
// Example 3:

// Input: n = 4, k = 4
// Output: -1
// Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should return -1.


// --------------------------------------- Solution ----------------------------------------------

// Given two integers n and k, return the kth factor of n if it exists.

// A factor of n is a number that divides n evenly.

// If k exceeds the total number of factors, return -1.
var kthFactor = function (n, k) {
    let factorArr = [];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factorArr.push(i);
            if (i !== n / i) {
                factorArr.push(n / i); // Add the corresponding larger factor
            }
        }
    }

    factorArr = sortingArr(factorArr);

    if (k <= factorArr.length) return factorArr[k - 1]; // Corrected indexing
    else return -1;
};

function sortingArr(arr) {
    // Sorting in ascending order using Bubble Sort
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}
