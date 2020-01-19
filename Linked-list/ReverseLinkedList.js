// Reverse a singly linked list.

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Solution O(n), space Complexity O(1)
var reverseList = function(head) {
  let before = null
  let current = head
  while (current != null) {
      let after = current.next
      current.next = before
      before = current
      current = after
  }
  return before
};