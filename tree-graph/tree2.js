// tree2.js

const buildTree = require("./build-tree"); // <- import the function here

var inorderTraversal = function (root) {
  let tempArr = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    tempArr.push(node.val);
    dfs(node.right);
  }

  dfs(root);
  return tempArr;
};

// Use it
let arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
let root = buildTree(arr);

console.log(inorderTraversal(root));
