// Given a string s, find the length of the longest substring without duplicate characters.

function longestSubString(str) {
  const hashTable = new Map();
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!hashTable.get(str[i])) {
      count++;
      hashTable.set(str[i], str[i]);
    }
  }

  console.log(count);
}

longestSubString("abcabcbc");

