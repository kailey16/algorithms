// HASH TABLE
// map data structure or objects
// keys -> hash function(process the key) -> value
// each key has to have a unique value

// hash function
// max is a number of buckets that we're using in our hash table to store values
var hash = (string, max) => {
  var hash = 0
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i)
  }
  return hash % max
  // divide the hash by the number of buckets and return the remainder
  // just for an example
}

let HashTable = function() {
  let storage = []
  const storageLimit = 4

  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    var index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      storage[index] = [ [key, value] ]
    } else {
      var inserted = false
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value
          inserted = true
        }
      }
      if (inserted === false) {
        storage[index].push([key, value])
      }
    }
  }

  this.remove = function(key) {
    var index = hash(key, storageLimit)
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index]
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i]
        }
      }
    }
  }

  this.lookup = function(key) {
    var index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      return undefined
    } else {
      for (var i = 0; i < storage[index].length; i++) { 
        if (storage[index][i][0] === key) {
        return storage[index][i][1]
        }
      }
    }
  }

}

console.log(has('quincy', 10)) // 5

let ht = new HashTable()
ht.add('beau', 'person')
ht.add('fido', 'dog')
ht.add('rex', 'dinosaur')
ht.add('tux', 'penguin')
console.log(ht.lookup('tux')) // 'penguin'
ht.print() // [ undefined, [['beau', 'person'], ['tux', 'penguin']], [['fido', 'dog']], [['rex', 'dinosaur']] ]
// bucket in index 0 was empty