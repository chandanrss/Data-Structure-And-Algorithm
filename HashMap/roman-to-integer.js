// Problem: https://leetcode.com/problems/roman-to-integer/
// Given a roman numeral, convert it to an integer.
// Input: s = "III"
// Output: 3
// Input: s = "IV"
// Output: 4
// Input: s = "MMCMXCIV"
// Output: 1994

var romanToInt = function (s) {
  const romanNumerals = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanNumerals.get(s[i]);
    const next = romanNumerals.get(s[i + 1]);
    // console.log(current, next);
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  console.log(result);
  return result;
};

// Example usage
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("XCIV")); // Output: 94
console.log(romanToInt("MMMCM")); // Output: 3900
