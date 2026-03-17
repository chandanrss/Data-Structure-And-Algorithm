class Node {
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
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(41);
root.left.right = new Node(5);

root.right.left = new Node(26);
root.right.right = new Node(7);


root.left.right.left = new Node(98);
root.left.right.right = new Node(99);

root.left.left.left = new Node(18);
root.right.right.right = new Node(98);


// console.log("In-Order Traversal:");
// inorder(root);


console.log("Pre-Order Traversal:");
preorder(root);

console.log("Post-Order Traversal:");
postorder(root);



