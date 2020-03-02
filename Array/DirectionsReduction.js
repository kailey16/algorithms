// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])

function dirReduc(arr){
  const dir = {
    "NORTH": "SOUTH",
    "EAST": "WEST",
    "SOUTH": "NORTH",
    "WEST": "EAST"
  }
  
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    if (stack[stack.length-1] === dir[arr[i]]) {
      stack.pop()
    } else {
      stack.push(arr[i])
    }
  }
  return stack
}