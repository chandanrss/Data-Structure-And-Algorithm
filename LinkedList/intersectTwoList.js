function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;
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

// Helper function to get the node at a specific index
function getNodeAtIndex(head, index) {
    let current = head;
    for (let i = 0; i < index && current; i++) {
        current = current.next;
    }
    return current;
}

// Test Case 1: Intersection exists
// listA: 4 -> 1 -> 8 -> 4 -> 5
// listB: 5 -> 6 -> 1 -> 8 -> 4 -> 5
// intersectVal = 8, skipA = 2, skipB = 3
let listA1 = createLinkedList([4, 1, 8, 4, 5]);
let listB1 = createLinkedList([5, 6, 1]);
let intersectNode1 = getNodeAtIndex(listA1, 2); // Node with value 8
getNodeAtIndex(listB1, 2).next = intersectNode1; // Connect listB to intersection
let result1 = getIntersectionNode(listA1, listB1);
console.log("Test Case 1:", result1 ? result1.val : null); // Expected: 8

// Test Case 2: No intersection
let listA2 = createLinkedList([2, 6, 4]);
let listB2 = createLinkedList([1, 5]);
let result2 = getIntersectionNode(listA2, listB2);
console.log("Test Case 2:", result2 ? result2.val : null); // Expected: null

// Test Case 3: One list is null
let listA3 = null;
let listB3 = createLinkedList([1, 5]);
let result3 = getIntersectionNode(listA3, listB3);
console.log("Test Case 3:", result3 ? result3.val : null); // Expected: null

// Test Case 4: Both lists are null
let listA4 = null;
let listB4 = null;
let result4 = getIntersectionNode(listA4, listB4);
console.log("Test Case 4:", result4 ? result4.val : null); // Expected: null

// Test Case 5: Intersection at the head of both lists
let listA5 = createLinkedList([1, 2, 3]);
let listB5 = listA5; // Both lists are the same
let result5 = getIntersectionNode(listA5, listB5);
console.log("Test Case 5:", result5 ? result5.val : null); // Expected: 1

// Test Case 6: One list is a sublist of the other (intersection at the head of the shorter list)
let listA6 = createLinkedList([3, 7, 8, 10]);
let listB6 = createLinkedList([8, 10]);
getNodeAtIndex(listA6, 2).next = listB6;
let result6 = getIntersectionNode(listA6, listB6);
console.log("Test Case 6:", result6 ? result6.val : null); // Expected: 8

// Test Case 7: Lists with same values but different nodes (no intersection)
let listA7 = createLinkedList([1, 2, 3]);
let listB7 = createLinkedList([1, 2, 3]);
let result7 = getIntersectionNode(listA7, listB7);
console.log("Test Case 7:", result7 ? result7.val : null); // Expected: null