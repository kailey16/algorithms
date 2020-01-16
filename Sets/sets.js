// kind of like an array, but no duplicate items
// the values are not in any paticular order
// typically used simply check for the presence of an item

function mySet() {
  var collection = []
  // to check the presence of an element
  this.has = function(element) {
    return (collection.indexOf(element) !== -1)
  }
  // to return all the values in the set
  this.values = function() {
    return collection
  }

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  this.remove = function(element) {
    if (this.has(element)) {
      const index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }
    return false
  }
  
  this.size = function() {
    return collection.length
  }
  // ES6 set has everything up to here, just remove is 'delete' and size is 'property'


  // this method will return the union of two sets
  this.union = function(otherSet) {
    var unionSet = new mySet()
    var firstSet = this.values()
    var secondSet = otherSet.values()
    
    firstSet.forEach(function(e) {
      unionSet.add(e)
    })

    secondSet.forEach(function(e) {
      unionSet.add(e)
    })
    // unionSet will not have any duplicate and not in order
    return unionSet
  }

  // return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    var intersectionSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })
    return intersectionSet
  }

  // return the difference of two sets as a new set
  this.difference = function(otherSet) {
    var differenceSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach(function(e){
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    return differenceSet
  }

  // test if the set is a subset of a different set
  this.subset = function(otherSet) {
    var firstSet = this.values()
    // every method checks if all of the elements in firstSet pass the test of function inside - true or false
    return firstSet.every(function(value) {
      return otherSet.has(value)
    })
  }
}

var setA = new mySet()
var setB = new mySet()
setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")
console.log(setA.subset(setB)) // true
console.log(setA.intersection(setB).values()) // ["a"]

// ES6 Set implementation
var setC = new Set()
var setD = new Set()
setC.add("a")
setD.add("b")
setD.add("c")
setD.add("a")
setD.add("d")
console.log(setD.values()) // [object Set Iterator]
setD.delete("a")
console.log(setD.has("a")) // false
