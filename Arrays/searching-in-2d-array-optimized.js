var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    console.log(Math.floor(left + right), m, n);
    let mid = Math.floor((left + right) / 2);
    let midValue = matrix[Math.floor(mid / n)][mid % n];
    console.log("Middle Value: ", midValue, mid);

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5],
      [7, 9, 11],
      [13, 15, 17],
    ],
    11
  )
); // returns true
