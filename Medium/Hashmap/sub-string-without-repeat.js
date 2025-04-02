function longestUniqueSubstring(str) {
  const hashTable = new Map();
  let left = 0; // Left boundary of the sliding window
  let finalCount = 0;

  for (let right = 0; right < str.length; right++) {
    if (hashTable.has(str[right])) {
      // Move left pointer to the right of the previous occurrence
      left = Math.max(left, hashTable.get(str[right]) + 1);
    }

    hashTable.set(str[right], right); // Update character's latest index
    finalCount = Math.max(finalCount, right - left + 1);
  }

  return finalCount;
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: 3 (abc)
console.log(longestUniqueSubstring("bbbbb")); // Output: 1 (b)
console.log(longestUniqueSubstring("pwwkew")); // Output: 3 (wke)
