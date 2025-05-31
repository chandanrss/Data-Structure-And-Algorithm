/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */

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


