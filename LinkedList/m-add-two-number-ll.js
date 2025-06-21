// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummyNode = new ListNode(0);
  let finalLL = dummyNode;
  while (l1 != null || l2 != null || carry != 0) {
    // console.log(l1.val, l2.val);
    let sum = carry;
    if (l1 != null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 != null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    console.log(sum);
    carry = Math.floor(sum / 10);
    finalLL.next = new ListNode(sum % 10);
    finalLL = finalLL.next;
  }

  return dummyNode.next;
};

// const list1 = new ListNode(3, new ListNode(4, new ListNode(2)));
// const list2 = new ListNode(4, new ListNode(6, new ListNode(5)));

const list1 = new ListNode(2, new ListNode(4, new ListNode(9)));
const list2 = new ListNode(
  1,
  new ListNode(0, new ListNode(40, new ListNode(9001)))
);

console.log(addTwoNumbers(list1, list2));
