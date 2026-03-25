// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var sortedArrayToBST = function (nums) {
  function buildTree(l, r) {
    if (l > r) return null;

    let arrMidVal = Math.floor((l + r) / 2);
    let root = new TreeNode(nums[arrMidVal]);

    root.left = buildTree(l, arrMidVal - 1);
    root.right = buildTree(arrMidVal + 1, r);

    return root;
  }

  return buildTree(0, nums.length - 1);
};

// let arr = [1, 2, 3, 4, 5, 6, 7, 9];
let arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];


console.log(sortedArrayToBST(arr));
 