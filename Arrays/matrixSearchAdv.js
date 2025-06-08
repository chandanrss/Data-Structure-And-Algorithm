// JavaScript program to search an element in row-wise
// and column-wise sorted matrix

function binarySearch(mat, target) {
  let i = 0;
  let j = mat.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (mat[mid] === target) {
      return true;
    } else if (target > mat[mid]) {
      i = mid + 1;
    } else j = mid - 1;
  }
  return false;
}

function matSearch(mat, x) {
  let n = mat.length;

  // Iterate over each row and perform binary search
  for (let i = 0; i < n; i++) {
    if (binarySearch(mat[i], x)) return true; // Element found in one of the rows
  }

  return false; // Element not found in any row
}

// Driver Code
let mat = [
  [3, 30, 38],
  [20, 52, 54],
  [35, 60, 69],
];
let x = 35;

if (matSearch(mat, x)) console.log("true");
else console.log("false");
