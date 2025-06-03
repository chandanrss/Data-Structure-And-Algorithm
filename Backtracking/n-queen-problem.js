// N-Queen Problem
// **Inputs:**
// * i: is the current row number where the queen is being placed. we begin with 0. 
// * n: is the total number of queens to be placed (also the size of the board), 
// * col: is a list of size (n+1) that represents the positions of the queens in each column.

// **Output**
// * all the possible solutions to the N-Queens problem for size n.


// **Algorithm: N_Queens Problem using Backtracking**

function promising(i) {
  let k = 1;
  let flag = true;

  while (flag === true && k < i) {
    if (arr[i] === arr[k] || Math.abs(arr[i] - arr[k]) === Math.abs(i - k)) {
      flag = false;
    }
    k++;
  }
  return flag;
}

function queen(i) {
  if (promising(i)) {
    if (i === n) {
      console.log(arr.slice(1, n + 1)); // Print the solution
    } else {
      for (let j = 1; j <= n; j++) {
        arr[i + 1] = j;
        queen(i + 1);
      }
    }
  }
}

let n = 5;
arr = new Array(n + 1).fill(0);
console.log(queen(0));
