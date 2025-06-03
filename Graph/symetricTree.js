function isSymmetricTree(root) {
    // Case 1:  nodes is null
    if (!root) return true;

    // Helper function to compare two nodes
    function isMirror(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    return isMirror(root.left, root.right);
}

const tree1 = {
    val: 1,
    left: { val: 55, left: null, right: null },
    right: { val: 55, left: null, right: null }
};

const tree2 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 2, left: null, right: null }
};

const tree3 = {
    val: 1,
    left: { val: 2, left: {val: 3, left: null, right: null}, right: null },
    right: { val: 2, left: null, right: {val: 3, left: null, right: null} }
};

const tree4 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
};

console.log("Tree 1 is symmetric:", isSymmetricTree(tree1)); // true
console.log("Tree 2 is symmetric:", isSymmetricTree(tree2)); // true
console.log("Tree 3 is symmetric:", isSymmetricTree(tree3)); // true
console.log("Tree 4 is symmetric:", isSymmetricTree(tree4)); // false