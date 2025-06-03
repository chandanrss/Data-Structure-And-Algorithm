// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters
// from the original string, while maintaining the relative order of the remaining characters.
//
//  For example, "ace" is a subsequence of "abcde" while "aec" is not.

var isSubsequence = function (s, t) {
  let i = (j = 0);
  if (s.length <= t.length) {
    while (i < s.length && j < t.length) {
      if (s[i] == t[j]) {
        i++;
        j++;
      } else {
        j++;
      }
    }
    return i == s.length;
  } else {
    return false;
  }
};

console.log(isSubsequence("ace", "abcde")); //true
console.log(isSubsequence("aec", "abcde")); //false
console.log(isSubsequence("kddfdj", "kjkjk")); //false
