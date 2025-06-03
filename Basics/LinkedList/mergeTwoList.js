// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

//Creating A Dummy/ Temp List node

function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

var mergeTwoLists = function (list1, list2) {
  // Creating Temp Node
  let tempHead = new ListNode(-1);
  let tail = tempHead;

  let temp = [];
	count = 0;
  // Treaverse
  while (list1 !== null && list2 !== null) {
    console.log(count++);
    if (list1.val <= list2.val) {
			console.log("list 1", list1.val);
      tail.next = list1;
      list1 = list1.next;
    } else {
			console.log("List 2", list2.val);
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  // Attach the remaining nodes
  tail.next = list1 !== null ? list1 : list2;

  return tempHead.next;
};

// Example Usage (Corrected to create linked lists)
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let mergedList = mergeTwoLists(list1, list2);

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