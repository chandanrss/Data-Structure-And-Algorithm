
//Same Tree



function isSameTree(p, q) {
    // Case 1: both nodes are null → trees match at this branch
    if (!p && !q) return true;

    // Case 2: one is null and other is not → trees differ
    if (!p || !q) return false;

    // Case 3: values do not match → trees differ
    if (p.val !== q.val) return false;

    // Recurse on left and right children
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const tree1 = {
    val: 1,
    left: { val: 5, left: null, right: null },
    right: { val: 3, left: null, right: null }
};

const tree2 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
};

console.log(isSameTree(tree1, tree2)); // true

