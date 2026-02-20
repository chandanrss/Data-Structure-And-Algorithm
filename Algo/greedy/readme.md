## Greedy Algorithm
### What is Greedy?

Greedy =
At every step, choose the locally best option
Hope it leads to global best solution

It doesn’t try all possibilities like DP.
It just makes the best choice right now.




### When do we use Greedy?

When problem has optimal substructure

When local best decision guarantees global best

Optimization problems (min steps, max profit, min intervals)

### Example Question (Very Likely Type)
Jump Game II

Given array where each element is max jump length,
return minimum jumps to reach last index.

Example:

[2,3,1,1,4]
Output: 2

### Why Greedy Here?

At every position:

1. We want to go as far as possible

2. Track farthest reachable index

3. When we reach end of current range → increase jump

4. We don’t need full DP because we don’t need all possibilities.

### This problem is not really about jumping.

It is about:

#### "How many layers does it take to reach the last node?"

Which is exactly a shortest path problem in an unweighted graph.