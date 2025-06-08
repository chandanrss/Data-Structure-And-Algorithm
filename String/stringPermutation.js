// Given a string s, the task is to return all permutations of a given string in lexicographically sorted order.

// Note: A permutation is the rearrangement of all the elements of a string. Duplicate arrangement can exist.

// Examples:

// Input:  s = "ABC"
// Output: "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"

// Input: s = "XY"
// Output: "XY", "YX"

// Input: s = "AAA"
// Output: "AAA", "AAA", "AAA", "AAA", "AAA", "AAA"

function permute(path, remaining) {
  console.log(path, remaining);
  console.log("----------------------------------");
  if (remaining.length === 0) {
    console.log("Last Step:");
    return path + ", ";
  }

  for (let i = 0; i < remaining.length; i++) {
    let newPath = path + remaining[i];
    let newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
    permute(newPath, newRemaining);
  }
}

var strPermute = function (str) {
  let result = "";
  //Base Condition
  if (str.length == 0) {
    return "";
  } else if (str.length == 1) {
    return str;
  }

  function permute(path, remaining) {
  
    if (remaining.length === 0) {
      return (result += path + ", ");
    }

    for (let i = 0; i < remaining.length; i++) {
      let newPath = path + remaining[i];
      let newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      permute(newPath, newRemaining);
    }
  }

  permute("", str);

  return result.slice(0,result.length-2); //removing 
};

// console.log(strPermute("ab"));
// console.log(strPermute("abcd"));
console.log(strPermute("aaa"));
