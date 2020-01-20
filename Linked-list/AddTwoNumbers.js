// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Time complexity : O(max(m,n)). Assume that mm and nn represents the length of l1 and l2 respectively, the algorithm above iterates at most max(m,n) times.
// Space complexity : O(max(m,n)). The length of the new list is at most max(m,n)+1.
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0)
  let current = head
  let carry = 0
  let sum = 0
  while (l1 || l2) {
      let x = l1 ? l1.val : 0
      let y = l2 ? l2.val : 0
      sum = x + y + carry
      sum > 9 ? carry = 1 : carry = 0
      current.next = new ListNode(sum % 10)
      current = current.next
      l1 ? l1 = l1.next : null
      l2 ? l2 = l2.next : null
  }
  if (carry > 0) {
      current.next = new ListNode(carry)
  }
  return head.next
};