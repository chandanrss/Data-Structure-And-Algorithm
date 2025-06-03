// You are given the heads of two un-sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,12,4], list2 = [1,31,24]
// Output: [1,1,2,3,4,4]

//Creating A Dummy/ Temp List node
function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

var mergeTwoUnSortedLists = function (list1, list2) {
  let tempValue = [];

  while (list1 !== null) {
    tempValue.push(list1.val);
    list1 = list1.next;
  }

  while (list2 != null) {
    tempValue.push(list2.val);
    list2 = list2.next;
  }

  tempValue.sort((a, b) => a - b);

	
  // Creating Temp Node
  let tempHead = new ListNode(-1);
  let current = tempHead;

	tempValue.forEach(element => {
		current.next = new ListNode(element);
		current = current.next;
	});

  return tempHead.next;
};

// Example Usage (Corrected to create linked lists)
const list1 = new ListNode(1, new ListNode(6, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(11, new ListNode(4)));

let mergedList = mergeTwoUnSortedLists(list1, list2);

// Helper function to print the linked list (for verification)
function printList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }

  console.log(result);
}

printList(mergedList); // Output: [1, 1, 2, 3, 4, 4]
