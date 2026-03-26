// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

const buildTree = require("./build-tree");

var minDepth = function (root) {
  if (!root) return 0;

  if (!root.right) return minDepth(root.left) + 1;
  if (!root.left) return minDepth(root.right) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

let arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
arr = [3, 9, 20, null, null, 15, 7];
let root = buildTree(arr);

// invertTree(tree);
console.log("Min Depth", minDepth(root));
