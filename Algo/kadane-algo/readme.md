## Kadane’s Algorithm (Maximum Subarray)

###  Problem

#### Find maximum sum of contiguous subarray.

Example:

[-2,1,-3,4,-1,2,1,-5,4]
Output: 6  // [4,-1,2,1]

### Why This Works?

At each step:

1. Either extend previous subarray

Or start new one

2. If sum becomes negative → reset.