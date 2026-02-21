function longestUniqueSubstring(str) {
  const hashTable = new Map();
  let cc = 0; // Left boundary of the sliding window
  let finalCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (hashTable.has(str[i])) {
      // Move left pointer to the right of the previous occurrence
      cc = Math.max(cc, hashTable.get(str[i]) + 1);
      console.log("cc Value", cc);
    }

    hashTable.set(str[i], i); // Update character's latest index
    console.log("hash setting ", str[i], i);
    finalCount = Math.max(finalCount, i - cc + 1);
    console.log("final Count", finalCount, i - cc + 1);
    console.log("Loop-------------------------------------------finished");
  }

  return finalCount;
}

// console.log(longestUniqueSubstring("abcabcbb")); // Output: 3 (abc)
console.log(longestUniqueSubstring("aauv")); // Output: 3 (abc)
// console.log(longestUniqueSubstring("bbbbb")); // Output: 1 (b)
// console.log(longestUniqueSubstring("pwwkew")); // Output: 3 (wke)
