// Jump Game II

// Given array where each element is max jump length,
// return minimum jumps to reach last index.

// Example:

// [2,3,1,1,4]
// Output: 2

function minJumps(nums) {
  let jump = 0;
  let endIndex = 0;

  let biggerJump = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const element = nums[i];
    biggerJump = Math.max(biggerJump, i + element);
    console.log(i, i + element, " ==> ",biggerJump);

    if (i === endIndex) {
      jump++;
      console.log("Jump: ", jump);
      endIndex = biggerJump;
    }
  }

  return jump;
}

// const tempArr = [1, 2, 3, 1, 1, 1];
const tempArr = [3, 2, 1, 0, 4];
console.log("Final: ", minJumps(tempArr));
//  SC: O(n)
//  TC: O(1)

// Another Quick Example (Even Trickier)
// [3, 2, 1, 0, 4]

// Start at index 0 → can reach 1, 2, 3
// But index 3 has value 0 → stuck there

// You can NEVER reach index 4.

// (For Jump Game II, it's usually guaranteed reachable, but this shows the danger.)