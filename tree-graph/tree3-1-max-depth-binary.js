// Given the root of a binary tree, return its maximum depth.

const buildTree = require("./build-tree");

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if (!root) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};


let arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
let root = buildTree(arr);


// invertTree(tree);
console.log("Max Depth", maxDepth(root));