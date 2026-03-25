// Given the root of a binary tree, return the postorder traversal of its nodes' values.

const buildTree = require("./build-tree");

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// root->left->right

var postorderTraversal = function (root) {
  let res = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  }

  dfs(root);
  return res;
};

// Use it
let arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
let root = buildTree(arr);

console.log(postorderTraversal(root));
