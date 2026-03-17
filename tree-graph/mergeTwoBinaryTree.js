//
// //
// //
// //
// //
// //
//

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var mergeTwoBinaryTree = function (root1, root2) {
  //   if (!root1 && !root2) return true;

  if (!root1) return root2;
  if (!root2) return root1;

  console.log(root1.val, root2.val);
  const mergedTree = new TreeNode(root1.val + root2.val);
  mergedTree.left = mergeTwoBinaryTree(root1.left, root2.left);
  mergedTree.right = mergeTwoBinaryTree(root1.right, root2.right);

  return mergedTree;
};

const tree1 = {
  val: 1,
  left: { val: 5, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

const tree2 = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

console.log(mergeTwoBinaryTree(tree1, tree2)); // true
