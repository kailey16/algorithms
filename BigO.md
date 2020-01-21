Big O (time complexcity & space complexcity)
- Big O time is the metric we use to describe the efficiency of algorithms
- Big O, big omega, and big theta describe the upper, lower, and tight bounds for the runtime

1. O(n!) > O(2^n) > O(n^2) > O(nlogn) > O(n) > O(logn)

2. Amortized time
  - means "average time taken per operation, if you do many operations"
  - There is a constant c, such that for every sequence of operations (also one ending with a costly operation of length L, the time is not greater than c*L
  
3. O(logn)
  - ex) binary search, finding an element in a balanced binary search tree

4. Recursive runtimes
  - when you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O(branches^depth)