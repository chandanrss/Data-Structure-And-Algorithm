

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

const buildTree = require("./build-tree");

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// root->left->right 

var preorderTraversal = function(root) {
    let res = [];

    function dfs(node){
        if(!node) return;
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return res;
};

// Use it
let arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
let root = buildTree(arr);

console.log(preorderTraversal(root));
