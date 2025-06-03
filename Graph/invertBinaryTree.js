//
//
//
//
//
//
//
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


const tree = {
    val: 1,
    left: { val: 2, left: {val: 3, left: null, right: null}, right: null },
    right: { val: 2, left: null, right: {val: 455, left: null, right: null} }
};

// invertTree(tree);
console.log("Invert Tree", invertTree(tree));