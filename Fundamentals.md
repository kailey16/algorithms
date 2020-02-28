1. What is function?
  A function is a process which takes some input, called arguments, and produces some output called a return value. Functions may serve the following purposes:
    - Mapping: Produce some output based on given inputs. A function maps input values to output values.
    - Procedures: A function may be called to perform a sequence of steps. The sequence is known as a procedure, and programming in this style is known as procedural programming.
    
    - First-class functions: Functions in JavaScript are utilized as first class objects. This usually means that these functions can be passed as arguments to other functions, returned as values from other functions, assigned to variables or can also be stored in data structures.
    - Nested functions: The functions, which are defined inside other functions, are called Nested functions. They are called 'everytime' the main function is invoked.

2. two paradigms
  1) OOP (Object-Oriented Programming)
    - Prototypal Inheritance (objects without classes, and prototype delegation, aka OLOO — Objects Linking to Other Objects)
    - `instances inherit directly from other objects`. Instances are typically instantiated via factory functions or Object.create(). Instances may be composed from many different objects, allowing for easy selective inheritance.
    - In JavaScript, prototypal inheritance is simpler & more flexible than class inheritance
  2) Functional Programming (enabled by lambdas with closure)
    - Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data
    - pure function?
      > Pure functions take some input and return some output based on that input. Given the same input, will always return the same output.
      > They are the simplest reusable building blocks of code in a program.
      > Produces no side effects.
      > Side effects can be:
          - Modifying any external variable or object property
          - Logging data to the console
          - Writing Data to a file
          - Writing data to the network
          - Triggering any external process
          - Calling any other functions with side-effects
          - Making Asynchronous Data Calls
    - pure components in React
      > Pure components are the simplest and fastest components. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.
      > Pure Component is the component which renders the same output for the same state and props value.
      > React provides the PureComponent base class for these class components as `React.PureComponent`. It is the same as Component except that Pure Components take care of `shouldComponentUpdate` by itself, it does the shallow comparison on the state and props data. If the previous state and props data is the same as the next props or state, the component is not Re-rendered.

3. What is a closure?
`A closure is a function that has access to its outer function scope even after the outer function has returned`
  - This means a closure can remember and access variables and arguments of its outer function even after the function has finished
  - closures are created every time a function is created, at function creation time.
  - To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
  - Among other things, closures are commonly used to `give objects data privacy`

```javascript
  function getCounter() {
    let counter = 0;
    return function() {
      return counter++;
    }
  }
  let count = getCounter();
  console.log(count());  // 0
  console.log(count());  // 1
  console.log(count());  // 2
  ```

4. What is dom?
DOM stands for Document Object Model and is responsible for how various objects in a document interact with each other. 

5. var vs let vs const
  1) const
    - the variable can’t be reassigned or re-declared
    - object can have properties mutated
  2) let
    - block scoped
    - cannot be re-declared in the same scope
    - the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm
    - the variable will be used only in the block it’s defined in
  3) var
    - function scoped
    - can be re-declared in the same scope
    - the variable may or may not be reassigned
    - the variable may or may not be used for an entire function, or just for the purpose of a block or loop


6. Truth Tables and Logic
  1) AND
    1 AND 1 gives 1. Any other input gives 0.
  2) NAND(NOT AND)
    1 AND 1 gives 0. Any other input gives 1.
  3) OR
    0 OR 0 gives 0. Any other input gives 1.
  4) NOR(NOT OR)
    0 OR 0 gives 1. Any other input gives 0.
  5) XOR
    Equal inputs give 0. Non equal inputs give 1.
  6) NOT
    Invert input bits. 0 becomes 1. 1 becomes 0.


7. Stateful vs Stateless application
  - Stateless application doesn’t read or store data. It simply processes the code and other content hosted on it.
  - Stateful applications, on the other hand, require backing storage that protects data during the service restarts.