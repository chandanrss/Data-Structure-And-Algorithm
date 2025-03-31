// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while(current!==null){
        let nexNode = current.next;
        current.next = prev;
        prev = current;
        current = nexNode;
    }

    return prev;
};









































//Testing......


// Definition for singly-linked list node
function ListNode(val, next) {
    this.val = val || 0;
    this.next = next || null;
}

// Helper function to create a list from an array
function createList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a list
function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Test Case 1
let head1 = createList([1, 2, 3, 4, 5]);
let reversed1 = reverseList(head1);
printList(reversed1);  // Output: [5, 4, 3, 2, 1]

// Test Case 2
let head2 = createList([1]);
let reversed2 = reverseList(head2);
printList(reversed2);  // Output: [1]

// Test Case 3
let head3 = createList([]);
let reversed3 = reverseList(head3);
printList(reversed3);  // Output: []

// Test Case 4
let head4 = createList([1, 2]);
let reversed4 = reverseList(head4);
printList(reversed4);  // Output: [2, 1]
