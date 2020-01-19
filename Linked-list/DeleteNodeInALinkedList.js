// Write a function to delete a node (except the tail) in a singly linked list,
// given only access to that node.

var deleteNode = function(nodeVal) {
  var currentNode = head
  var previousNode;
  if (currentNode.val === nodeVal) {
    head = currentNode.next
  } else {
    while (currentNode.val !== nodeVal) {
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = currentNode.next
  }
  length--;
}