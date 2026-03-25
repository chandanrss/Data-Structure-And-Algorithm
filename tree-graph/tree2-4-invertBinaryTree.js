//
//
//Given the root of a binary tree, invert the tree, and return its root.
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// 
//
//
//

const buildTree = require("./build-tree");

//
var invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);


  return root;

};


// const tree = {
//     val: 1,
//     left: { val: 2, left: {val: 3, left: null, right: null}, right: null },
//     right: { val: 2, left: null, right: {val: 455, left: null, right: null} }
// };

let arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
let root = buildTree(arr);


// invertTree(tree);
console.log("Invert Tree", invertTree(root));