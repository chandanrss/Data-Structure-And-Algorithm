// Given:
// You are working with two arrays:

// Array a = [2, 4]

// Array b = [16, 32, 96]

// You are trying to find all integers x such that:

// Every element in array a is a factor of x
// → In other words, x is divisible by all numbers in a.

// x is a factor of every element in array b
// → In other words, all numbers in b are divisible by x.

// Explanation

// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.

// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

var factorBetweenTwoSet = function (a, b) {
   // Find LCM of all elements in a
  const lcm = (arr) => arr.reduce((acc, val) => (acc * val) / gcd(acc, val));

  // Find GCD of all elements in b
  const gcdAll = (arr) => arr.reduce((acc, val) => gcd(acc, val));

  // Helper function to find GCD of two numbers
  const gcd = (x, y) => {
    while (y) {
      [x, y] = [y, x % y];
    }
    return x;
  };

  const lcmA = lcm(a);
  const gcdB = gcdAll(b);

  let count = 0;
  for (let i = lcmA; i <= gcdB; i += lcmA) {
    if (gcdB % i === 0) {
      count++;
    }
  }

  return count;
}

// Example:
const a = [2, 4];
const b = [16, 32, 96];
console.log(factorBetweenTwoSet(a, b)); // Output: 3