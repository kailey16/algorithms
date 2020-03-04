* Object-oriented programming (OOP)
  - Programming paradigm based on the concept of "objects". Objects can contain data in the form of attributes or properties and code n the form of procedures(methods).
  - A feature of objects is an object's procedures that can access and often modify the data fields of the object with which they are associated (objects have a notion of "this" or "self").
  - In OOP, computer programs are designed by making them out of objects that interact with one another.
  - OOP languages are diverse, but the most popular ones are class-based, meaning that objects are instances of classes, which also determine their types.

1. two paradigms of Javascript
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


2. What is function?
  A function is a process which takes some input, called arguments, and produces some output called a return value. Functions may serve the following purposes:
    - Mapping: Produce some output based on given inputs. A function maps input values to output values.
    - Procedures: A function may be called to perform a sequence of steps. The sequence is known as a procedure, and programming in this style is known as procedural programming.
    
    - First-class functions: Functions in JavaScript are utilized as first class objects. This usually means that these functions can be passed as arguments to other functions, returned as values from other functions, assigned to variables or can also be stored in data structures.
    - Nested functions: The functions, which are defined inside other functions, are called Nested functions. They are called 'everytime' the main function is invoked.


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


8. Callback function
  - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
  - Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as fetch().


9. Promise
  - The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
   - A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
  - A Promise is in one of these states:
      * pending: initial state, neither fulfilled nor rejected.
      * fulfilled: meaning that the operation completed successfully.
      * rejected: meaning that the operation failed.
 
 
10. async/await
  1) async
    ```javascript
    async function f() {
      return 1;
    }
    f().then(alert)
    ```
    The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
    So, async ensures that the function returns a promise, and wraps non-promises in it
  2) await
    ```javascript
    async function f() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
      });
      let result = await promise; // wait until the promise resolves
      alert(result); // "done!"
    }
    ```
    The keyword await makes JavaScript wait until that promise settles and returns its result. It works only inside async functions.
    ```javascript
    async function showAvatar() {
      let response = await fetch('/article/promise-chaining/user.json');
      let user = await response.json();
      return user;
    }
    ```

11. primitive data type
  - data that is not an object and has no methods.
  - There are 7 primitive data types: string, number, bigint, boolean, null, undefined, and symbol.
  - All primitives are immutable, they cannot be altered
  - non primitive data type is object


12. relational database vs non-relational database
  1) relational database (SQL database)
    - The data is stored in tables containing rows (which represents an entry) and columns (which stores and sorts a specific type of information). Relationships are established through Primary and Foreign keys.
    - Use Structured Query Language (SQL).
    - Advantages:
      Can handle lots of complex queries, database transactions, and routine analysis of data.
      ACID(Atomity, Consistency, Isolation, Durability): Set of properties that ensure reliable database transactions.
    - Disadvantages:
      Cannot store complex or very large images, numbers, designs and multimedia products.
      Can become very costly with maintenance and new servers.
  2) non-relational database (noSQL database)
    - does not incorporate the table model, instead data can be stored in a single document file
    - much more flexible than relational database
    - more like file folders, assembling related information of all types