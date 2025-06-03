//
//Note:
//This approach generates partial permutations and is not a complete permutation generator. For complete permutations, you’ll need a backtracking approach.
//
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

var permute = function (nums) {
    let finalArr = [];
    let n = nums.length;
    let count = 0;
    let tempArr = [...nums];
  
    if (n === 1) return [nums];
  
    for (let i = 0; i < factorial(n); i++) {
      if (count === n - 1) {
        count = 0;
      }
  
      [tempArr[count], tempArr[count + 1]] = [
        tempArr[count + 1],
        tempArr[count],
      ];
  
      finalArr.push([...tempArr]);
      ++count;
    }
  
    return finalArr;
  };
  

// Function to calculate factorial
const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  };


console.log(permute([5,4,6,2]));



//Note: This approach generates partial permutations and is not a complete permutation generator. For complete permutations, you’ll need a backtracking approach.