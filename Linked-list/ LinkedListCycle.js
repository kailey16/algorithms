// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// Solution time complexcity O(n), space complexcity O(n) -- using Hash Table (or Set)
var hasCycle = function(head) {
  let current = head
  let visited = new Set()
  while (current != null) {
      if (visited.has(current)) {
          return true
      } else {
          visited.add(current)
      }
      current = current.next
  }
  return false
};

// Solution time complexcity O(n), space complexcity O(1)
// considering two pointers at different speed, if there is a cycle, they will meet at some point
var hasCycle = function(head) {
  if (head === null || head.next === null) {
      return false
  }
  
  slow = head
  fast = head.next
  while (slow != fast) {
      if (fast === null || fast.next === null) {
          return false
      }
      slow = slow.next
      fast = fast.next.next
  }
  return true
};