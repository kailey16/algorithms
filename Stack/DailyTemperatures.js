// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

// Solution with array - not a good solution!!!
var dailyTemperatures = function(T) {
    
  let output = [];
  for (let i = 0; i < T.length; i++) {

      const subArr = T.slice(i+1)
      for (let j = 0; j < subArr.length; j++) {
          if (subArr[j] > T[i]) {
              output.push(j+1)
              break;
          }
      }
      output[i] ? null : output.push(0)
  }
  
  return output
};


// Solution O(n) - with Stack
var dailyTemperatures = function(T) {
  let arr = new Array(T.length).fill(0);
    
  // stack is holding the index of the hottest days
  let stack = [];
  for (let i = 0; i < T.length; i++) {
      
      while (stack.length > 0 && T[i] > T[stack[stack.length-1]]) {
          let index = stack.pop();
          arr[index] = i - index;
      }
      stack.push(i);
  }
  return arr;
};