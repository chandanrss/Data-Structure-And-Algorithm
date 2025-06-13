// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

function letterCombination(digit) {
  if (!digit.length) return [];

  let keywordArr = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "vwyz"];

  let result = [];
  var allCombination = function (start, currentCombination) {
    if (start == digit.length) {
      result.push(currentCombination);
      return result;
    }

    let letters = keywordArr[digit[start] - 2];

    console.log(start, letters, start);

    for (let letter of letters) {
      console.log(currentCombination + letter);
      allCombination(start + 1, currentCombination + letter);
    }
  };

  allCombination(0, "");
  return result;
}

console.log(letterCombination("23"));
