// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

function checkLetters(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  const hashTable = new Map();

  // Insert values
  let flag = true;
  str1.forEach((element, i) => {
    str2.forEach((ele) => {
      if (element == ele) {
        str2.replace(element, "#");
        return;
        //   hashTable.set(element, ele);
      } else {
        flag = false;
        return false;
      }
    });
  });
  return flag;
}

var groupAnagrams = function (strs) {
  let tempArr = [];
  const hashTable = new Map();

  strs.forEach((element, i) => {
    const sorted = element.split("").sort().join("");

    if (!hashTable.has(sorted)) {
      hashTable.set(sorted, []);
    }
    hashTable.get(sorted).push(element);
  });

  // Return grouped anagrams as an array of arrays
  return Array.from(hashTable.values());
};

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const grouped = groupAnagrams(words);
console.log(grouped);