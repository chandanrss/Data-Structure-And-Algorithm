// Sliding Window (Variable Size)
// Problem

// Longest subarray with sum ≤ K

// Why Variable Window?

// Expand window →
// If condition breaks → shrink window

function longestSubarray(arr, k) {
    let left = 0;
    let sum = 0;
    let maxLength = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum > k) {
            sum -= arr[left];
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


const tempArr = [1,4,2,10,23,3,1,0,20];
const k = 4;
console.log("Final O/P: ", longestSubarray(tempArr, k));
