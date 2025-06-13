//
//
//
//
//return all odd-occurring element:
//
//
//

var allOddOccur = function (arr) {
  let resultHashMap = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    resultHashMap.set(arr[i], resultHashMap.get(arr[i]) + 1 || 1);
  }

  // Step 2: Filter odd occurrences
  for (let [key, value] of resultHashMap.entries()) {
    if (value % 2 !== 0) {
      result.push(key);
    }
  }
  return result;
};

let a = [2, 2, 2, 3, 3, 5, 5, 6, 6, 6, 6, 6];

// allOddOccur(a);
console.log(allOddOccur(a));


// ⌛ Time Complexity:
// Counting frequencies (first loop):

// Runs once for each element in arr → O(n).

// Iterating over the Map (second loop):

// At most one entry per unique number → O(k), where k is the number of distinct elements in the array.

// ✅ Since k ≤ n, we can say the total time complexity is:
// O(n)