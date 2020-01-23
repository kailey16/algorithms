1. What is function?
  A function is a process which takes some input, called arguments, and produces some output called a return value. Functions may serve the following purposes:
    - Mapping: Produce some output based on given inputs. A function maps input values to output values.
    - Procedures: A function may be called to perform a sequence of steps. The sequence is known as a procedure, and programming in this style is known as procedural programming.

2. two paradigms
  1) OOP (Object-Oriented Programming)
    - Prototypal Inheritance (objects without classes, and prototype delegation, aka OLOO — Objects Linking to Other Objects)
    - instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.
    - In JavaScript, prototypal inheritance is simpler & more flexible than class inheritance
  2) Functional Programming (enabled by lambdas with closure)
    - Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data
    - pure function?
      > Pure functions take some input and return some output based on that input. Given the same input, will always return the same output.
      > Produces no side effects.
      > They are the simplest reusable building blocks of code in a program.

3. What is a closure?
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
  - To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
  - The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
  - Among other things, closures are commonly used to give objects data privacy





/// Practices to do
1. build a click counter with React