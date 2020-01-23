// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(0)
  let current = dummyHead
  let list1 = l1
  let list2 = l2
  while (list1 || list2) {
      if (list1 == null) {
          current.next = list2
          break;
      }
      if (list2 == null) {
          current.next = list1
          break;
      }
      
      if (list1.val <= list2.val) {
          current.next = list1
          list1 = list1.next
          current = current.next
      } else {
          current.next = list2
          list2 = list2.next
          current = current.next
      }
      
  }
  return dummyHead.next
};