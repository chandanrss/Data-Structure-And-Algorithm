//
//
//
//
//
//
//
//
//
//
var binaryTreePaths = function (root) {
  if (!root) return [];

  const newPaths = [];

  function traverse(node, currentPath) {
    if (!node.left && !node.right) {
      newPaths.push(currentPath + node.val);
      return;
    }

    if (node.left) {
      traverse(node.left, currentPath + node.val + "->");
    }

    if (node.right) {
      traverse(node.right, currentPath + node.val + "->");
    }
  }

  traverse(root, "");
  return newPaths;
};

const tree = {
  val: 1,
  left: { val: 2, left: { val: 3, left: null, right: null }, right: null },
  right: { val: 2, left: null, right: { val: 455, left: null, right: null } },
};

// invertTree(tree);
console.log("Path Tree", binaryTreePaths(tree));
