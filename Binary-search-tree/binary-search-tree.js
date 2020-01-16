// Binary Search Tree(BST)
// tree data structure
// binary tree can only have two children for each node
// it is ordered, each subtree is less than or equal to the parent node and each right subtree is greater than or eqaul to the parent node

// if tree is balanced, the difference between maxHeight and minHeight would be at most 1

// traversal
// 1. in oreder traversal : begin the search at the left most node and end at the right most node
// 2. pre order : explore the root node before the leaves
// 3. post order : explores the leaves before the root
// 4. level order : breathe-first search, explores all the nodes in a given level within a tree before continuing on to the next level further


class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      // searchTree is recursive function
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
            return;
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return;
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null;
        }
      }
      return searchTree(node)
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  findMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  find(data) {
    let current = this.root
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }

      if (current === null) {
        return null
      }
    }
    return current
  }

  isPresent(data) {
    let current = this.root
    while (current) {
      if (data === current.data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  // recursive function
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null
        }
        // node has no left child
        if (node.left == null) {
          return node.right
        }
        // node has no right child
        if (node.right == null) {
          return node.left
        }
        // node has two children
        var tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight - 1)
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
    if (left < right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1
    }
    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)
    if (left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  inOrder() {
    if (this.root === null) {
      return null
    } else {
      var result = new Array()
      function traversInOrder(node) {
        node.left && traversInOrder(node.left)
        result.push(node.data)
        node.right && traversInOrder(node.right)
      }
      traversInOrder(this.root)
      return result
    }
  }

  preOrder() {
    if (this.root === null) {
      return null
    } else {
      var result = new Array()
      function traversPreOrder(node) {
        result.push(node.data)
        node.left && traversPreOrder(node.left)
        node.right && traversPreOrder(node.right)
      }
      traversPreOrder(this.root)
      return result
    }
  }

  postOrder() {
    if (this.root === null) {
      return null
    } else {
      var result = new Array()
      function traversPostOrder(node) {
        node.left && traversPostOrder(node.left)
        node.right && traversPostOrder(node.right)
        result.push(node.data)
      }
      traversPostOrder(this.root)
      return result
    }
  }

  levelOrder() {
    let result = []
    let Q = []
    if (this.root != null) {
      Q.push(this.root)
      while(Q.length > 0) {
        let node = Q.shift()
        result.push(node.data)
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }
}

const bst = new BST()
bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
bst.remove(4)
console.log(bst.findMin()) // 1
console.log(bst.findMax()) // 7
bst.remove(7)
console.log(bst.findMax()) // 6
console.log(bst.isPresent(4)) // false


