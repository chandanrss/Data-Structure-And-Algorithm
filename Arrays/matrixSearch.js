// Java Script program to search an element in row-wise
// and column-wise sorted matrix

function matSearch(mat, x) {
    const n = mat.length, m = mat[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j] === x)
                return true;
        }
    }

    // If x was not found, return false
    return false;
}

// Driver Code
const mat = [ [ 3, 30, 38 ], 
    		  [ 20, 52, 54 ],
              [ 35, 60, 69 ] ];
const x = 35;

if (matSearch(mat, x))
    console.log("true");
else
    console.log("false");