class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// In-order Traversal: Left -> Root -> Right
function inorder(root) {
    if (root) {
        inorder(root.left);
        console.log(root.val);
        inorder(root.right);
    }
}

// Pre-order Traversal: Root -> Left -> Right
function preorder(root) {
    if (root) {
        console.log(root.val);
        preorder(root.left);
        preorder(root.right);
    }
}

// Post-order Traversal: Left -> Right -> Root
function postorder(root) {
    if (root) {
        postorder(root.left);
        postorder(root.right);
        console.log(root.val);
    }
}


//create a sample tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(6);
root.left.left.right = new TreeNode(7);

root.left.right.left = new TreeNode(8);
root.left.right.right = new TreeNode(9);


console.log("In-Order Traversal:");
inorder(root);


console.log("Pre-Order Traversal:");
preorder(root);

console.log("Post-Order Traversal:");
postorder(root);
