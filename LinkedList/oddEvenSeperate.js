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
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var oddEvenList = function (head) {
    if (!head) return null;

    let oddNode = new ListNode(-1);   // Dummy node for odd values
    let evenNode = new ListNode(-1);  // Dummy node for even values
    let oddList = oddNode;
    let evenList = evenNode;

    let current = head;

    while (current !== null) {
        if (current.val % 2 === 0) {
            evenList.next = current;
            evenList = evenList.next;
        } else {
            oddList.next = current;
            oddList = oddList.next;  // ✅ FIXED: was incorrectly modifying evenList
        }
        current = current.next;
    }

    evenList.next = null;             // Terminate even list
    oddList.next = evenNode.next;     // Append even list to odd list

    return oddNode.next;              // ✅ Return head of actual result, not dummy node
};
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the linked list
function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Test Case 1
let head = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
let newHead1 = oddEvenList(head);
console.log("Test Case 1:");
printList(newHead1); // Expected: [1, 2, 3, 4, 5]
