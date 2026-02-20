// Problem

// Find sum from index L to R multiple times.

function buildPrefix(arr) {
  const prefix = new Array(arr.length);

  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

function rangeSum(prefix, L, R) {
  if (L === 0) return prefix[R];
  return prefix[R] - prefix[L - 1];
}

const tempArr = [1, 4, 2, 10, 23, 3, 1, 0, 20];

// console.log("Final O/P: ", buildPrefix(tempArr));

console.log("Range Sum", rangeSum(buildPrefix(tempArr), 5, 7));
