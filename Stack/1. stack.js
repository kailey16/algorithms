// STACK
// Last in First out
// function: push, pop, peek, length

// ex1) Palindrome
function Palindrome() {
  var letters = []
  var word = "racecar"
  var rword = ""

  for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
  }

  for (var i = 0; i < word.length; i++) {
    rword += letters.pop()
  }

  if (rword === word) {
    return true
  } else { return false }
}



// creat a stack
var Stack = function() {
  this.count = 0
  this.storage = {}

  this.push = function(value) {
    this.storage[this.count] = value
    this.count++
  }

  this.pop = function() {
    if (this.count === 0) {
      return undefined
    }

    this.count--;
    var result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.size = function() {
    return this.count
  }

  // peek doesn't remove the item
  this.peek = function(value) {
    return this.storage[this.count-1]
  }
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek()) // 2
console.log(myStack.pop()) // 2
console.log(myStack.peek()) // 1

