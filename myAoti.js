// Input: s = "42"
// Output: 42
// Expanation:
// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//
//         ^
// Example 2:
// Input: s = " -042"
// Output: -42
// Explanation:
// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:
// Input: s = "1337c0d3"
// Output: 1337
// Explanation:

// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:
// Input: s = "0-1"
// Output: 0
// Explanation:

// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
//
//  Example 5:
// Input: s = "words and 987"
// Output: 0
// Explanation:
// Reading stops at the first non-digit character 'w'.

var myAtoi = function (s) {
  s = s.trim();
  if (!s.length) return 0;

  let signFlag = 1;
  let newDigit = "";

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    console.log("Element is : ", s[i], i);
    if (element >= "0" && element <= "9") {
      if (element != 0) newDigit += element;
      console.log("Element 1 : ", s[i], i);
      //
    } else if (s[i] === "+" || s[i] === "-") {
      if (s[i] === "-") signFlag = -1;

      if (Math.abs(newDigit) >= 0) {
        signFlag = 1;
              }
      console.log("Element 2 : ", s[i], i);
      //
    } else {
      if (!newDigit.length) return "0";
      console.log("Element 3 : ", s[i]);
      return signFlag * Math.abs(newDigit);
    }

    if (i + 1 == s.length) {
      return signFlag * Math.abs(newDigit);
    }
  }
};

console.log(myAtoi("22-34"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-054"));
console.log(myAtoi("0-1")); //-------------TODO Need to fix code for this input
