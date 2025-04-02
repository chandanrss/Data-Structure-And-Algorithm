// Example 1: Given a string s, return true if it is a palindrome, false otherwise.

// A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

function isPalindrome(str) {
  let lPointer = 0;
  let rPointer = str.length - 1;
  let isPalindrom = false;
  while (lPointer < rPointer) {
    if (str[lPointer] === str[rPointer]) {
      //   console.log(str[lPointer], "-", str[rPointer]);
      lPointer++;
      rPointer--;
      isPalindrom = true;
    } else {
      isPalindrom = false;
      break;
    }
  }
  return isPalindrom;
}

console.log(isPalindrome("racecar"));
