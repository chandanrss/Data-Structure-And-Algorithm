// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

const buildTree = require("./build-tree");

var pathSum = function (root, targetSum) {
  let tempSum = 0;
  let isTrue = false;

  function dfs(node) {
    if (!node) {
      return 0;
    }

    tempSum += node.val;
    console.log("Altering. ", tempSum);
    if (!node.left && !node.right) {
      if (tempSum == targetSum) {
        isTrue = true;
      }
    }
    dfs(node.left);
    dfs(node.right);
    tempSum -= node.val;
  }
  dfs(root);
  return isTrue;
};

let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
arr = [1, 2];
let targetSum = 1;
let root = buildTree(arr);

// invertTree(tree);
console.log("Path Sum", pathSum(root, targetSum));
