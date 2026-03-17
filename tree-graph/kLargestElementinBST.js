// K'th Largest Element in BST when modification to BST is not allowed
// Given a Binary Search Tree (BST) and a positive integer k, 
// the task is to find the kth largest element in the Binary Search Tree.


// Javascript Program to find kth largest element
class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

// Function which will traverse the BST in
// reverse in-order manner
function kthLargestRecur(node, count, k) {

    // Base case
    if (node === null) {
        return -1;
    }

    // Traverse the right subtree first (larger elements)
    let right = kthLargestRecur(node.right, count, k);
    if (right !== -1) {
    
    	// If the k-th largest number
        // is found in the right subtree
        return right; 
    }
    
    count.value++;

    // If root node is the k-th largest
    // element, return it
    if (count.value === k) {
        return node.data;
    }

    // Otherwise, traverse the left subtree
    return kthLargestRecur(node.left, count, k);
}

function kthLargest(root, k) {

	// Use an object to maintain count
    // as reference
    const count = { value: 0 }; 
    return kthLargestRecur(root, count, k);
}

// Create a hard-coded tree.
//         20
//       /   \
//      8     22
//    /  \  
//   4   12  
//      /  \
//     10   14
let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

let k = 3;
console.log(kthLargest(root, k));