//
//
//
//The primary issue in the code is that the base case check if (!root) return false; 
// inside the check function is incorrect. For an empty subtree (i.e., when node is null),
//  the height should be considered 0, and it should be considered balanced. Returning false will 
// cause the algorithm to incorrectly identify balanced trees as unbalanced. Also, the check function 
// is calling the isBalanced function recursively, which is not what we want.
//
//
//
//
//

var isBalanced = function (root) {
  function check(node) {
    if (!node) return 0;

    const left = check(node.left);
    if (left === -1) return -1;

    const right = check(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }
  return check(root) !== -1;
};

const tree = {
  val: 1,
  left: { val: 2, left: { val: 3, left: null, right: null }, right: null },
  right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
};

const tree2 = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: { val: 4, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  },
  right: { val: 2, left: null, right: null },
};

console.log("Tree is balanced:", isBalanced(tree)); // Output: true
console.log("Tree2 is balanced:", isBalanced(tree2)); // Output: true
console.log("Tree3 is balanced:", isBalanced(tree3)); // Output: false
