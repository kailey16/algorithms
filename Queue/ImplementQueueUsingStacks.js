// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.

// Example:
// MyQueue queue = new MyQueue();
// queue.push(1);
// queue.push(2);  
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false


var MyQueue = function() {
  this.stack = [];
};

MyQueue.prototype.push = function(x) {
  if (this.stack.length === 0) {
      return this.stack.push(x)
  }
  const stack2 = [];
  while (this.stack.length > 0) {
      stack2.push(this.stack.pop());
  }
  stack2.push(x);
  while (stack2.length > 0) {
      this.stack.push(stack2.pop());
  }
};

MyQueue.prototype.pop = function() {
  return this.stack.length > 0 ? this.stack.pop() : undefined;
};

MyQueue.prototype.peek = function() {
  return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
};

MyQueue.prototype.empty = function() {
  return this.stack.length === 0;
};