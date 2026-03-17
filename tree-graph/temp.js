class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inOrder(root) {
  if (root) {
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
  }
}

function kLargest(node, count, k) {
  if (!node) {
    return -1;
  }
  console.log("Hi there");
  // finding last element on right side
  let right = kLargest(node.right, count, k);

  if(right  !== -1){
    return right;
  }

  count.val++;

  if(count.val == k){
    return node.val;
  }

  return kLargest(node.left, count, k);
  
}

function klargestElement(node, k) {
  let count = {
    val: 0,
  };
  return kLargest(node, count, k);
}

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.left.left.left = new TreeNode(6);
// root.left.left.right = new TreeNode(7);

// root.left.right.left = new TreeNode(8);
// root.left.right.right = new TreeNode(9);

let root = new TreeNode(20);
root.left = new TreeNode(8);
root.right = new TreeNode(22);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(12);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(14);

console.log("In-Order Traversal:");
inOrder(root);

var k = 3;
console.log(klargestElement(root, k));
