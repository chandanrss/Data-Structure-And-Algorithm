
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.




function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeElements = function(head, val) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
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
let head1 = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
let val1 = 6;
let newHead1 = removeElements(head1, val1);
console.log("Test Case 1:");
printList(newHead1); // Expected: [1, 2, 3, 4, 5]

// Test Case 2
let head2 = createLinkedList([7, 7, 7, 7]);
let val2 = 7;
let newHead2 = removeElements(head2, val2);
console.log("Test Case 2:");
printList(newHead2); // Expected: []

// Test Case 3
let head3 = createLinkedList([1, 2, 3, 4, 5]);
let val3 = 6;
let newHead3 = removeElements(head3, val3);
console.log("Test Case 3:");
printList(newHead3); // Expected: [1, 2, 3, 4, 5]

// Test Case 4
let head4 = createLinkedList([6, 1, 2, 3, 4, 5]);
let val4 = 6;
let newHead4 = removeElements(head4, val4);
console.log("Test Case 4:");
printList(newHead4); // Expected: [1, 2, 3, 4, 5]

// Test Case 5
let head5 = null;
let val5 = 1;
let newHead5 = removeElements(head5, val5);
console.log("Test Case 5:");
printList(newHead5); // Expected: []