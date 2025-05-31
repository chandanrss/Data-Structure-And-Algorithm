/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */

// You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at most one outgoing edge.

// The graph is represented with a given 0-indexed array edges of size n, indicating that there is a directed edge from node i to node edges[i]. If there is no outgoing edge from i, then edges[i] == -1.

// You are also given two integers node1 and node2.

// Return the index of the node that can be reached from both node1 and node2, such that the maximum between the distance from node1 to that node, and from node2 to that node is minimized. If there are multiple answers, return the node with the smallest index, and if no possible answer exists, return -1.

// Note that edges may contain cycles.

 

// Example 1:


// Input: edges = [2,2,3,-1], node1 = 0, node2 = 1
// Output: 2
// Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
// The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.


//  e = [2,2,3,-1]
var closestMeetingNode = function(edges, node1, node2) {
    
    
    function findDistance(startingNode){
        let dist = new Array(edges.length).fill(Infinity);
        let d = 0;

        // while(startingNode != -1 && dist[startingNode] === Infinity){
        while(startingNode != -1){
            dist[startingNode] = d;
            d++;
            startingNode = edges[startingNode];
        }

        return dist;
    }

    const distance1 = findDistance(node1);
    const distance2 = findDistance(node2);

    console.log(distance1,distance2);

    //Got the distance

    let minDist = Infinity
    let result = -1;

    for (let i = 0; i < edges.length; i++) {
        if(distance1[i] !== Infinity && distance2[i] !== Infinity){
            const maxDist = Math.max(distance1[i], distance2[i]);
            console.log(i, maxDist < minDist);
            if(maxDist < minDist){
                minDist = maxDist;
                result = i;
            }
        }
        // const element = i;
        
    }

    console.log(result);


};

closestMeetingNode([2,2,3,-1],0,1);


