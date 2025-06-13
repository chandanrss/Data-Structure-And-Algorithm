// You’re given a matrix M where:

// M[i][j] === 1 means person i is connected to person j (either gifted or was gifted).

// You must count the number of distinct groups (connected components).


function countGroups(related) {
  const n = related.length;
  const visited = new Array(n).fill(false);

  function dfs(i) {
    for (let j = 0; j < n; j++) {
      if (related[i][j] === '1' && !visited[j]) {
        visited[j] = true;
        dfs(j);
      }
    }
  }

  let groupCount = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i);
      groupCount++;
    }
  }

  return groupCount;
}

// ✅ Example Usage
const relatedMatrix = ["110", "110", "001"];
console.log(countGroups(relatedMatrix)); // Output: 2


// How It Works:
// Each person is a node.

// If related[i][j] === '1', there's a connection (edge).

// We use DFS to explore all connected nodes.

// Count how many times we start a new DFS — this equals the number of groups.