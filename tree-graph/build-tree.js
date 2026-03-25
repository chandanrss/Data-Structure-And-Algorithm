// build-tree.js

function buildTree(arr) {
  if (!arr.length || arr[0] == null) return null;

  let nodes = arr.map((v) =>
    v == null ? null : { val: v, left: null, right: null },
  );

  for (let i = 0; i < arr.length; i++) {
    if (nodes[i] != null) {
      let leftIdx = 2 * i + 1;
      let rightIdx = 2 * i + 2;

      if (leftIdx < arr.length) nodes[i].left = nodes[leftIdx];
      if (rightIdx < arr.length) nodes[i].right = nodes[rightIdx];
    }
  }
  return nodes[0];
}

// 👇 export it
module.exports = buildTree; 
// the above line one export buildTree (the function itself)


// exports.buildTree = buildTree;
// export an object containing multiple named properties.
// → Import receives the whole object, so you must destructure the property you want.