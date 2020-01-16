// GRAPHS
// data in graph is called 'nodes' or 'verticies'
// the connection is called 'edges'

// Directed Graphs
// - graphs with direction on the edges

// Undirected Graphs
// - graphs with no direction on the edges


// Adjacency List

// 1. as an object
// Undirected graph: A - B - C
var undirectedG = {
  NodeA: ["NodeB"],
  NodeB: ["NodeA", "NodeC"],
  NodeC: ["NodeB"]
}

// 2. as an array
// Undirected graph: A - B - C
var undirectedG = [
  [1], // Node A
  [0, 2], // Node B
  [1] // Node C
]

// 3. with Adjacency Matrix
// two dimensional array: rows and colums are both nodes
// Undirected graph: A - B - C
var adjMat = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
]

// Directed graph: A <- B <- C
var adjMat = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0]
]

// 4. Incidence Matrix
// two dimensional array: row = nodes, columns = edges
// can have uneven number of rows and columns

// Directed graph: -1 is the one which receives an arrow
var incMatDir = [
  [1, 0, -1, 1],
  [-1, 1, 0, 0],
  [0, -1, 1, 0],
  [0, 0, 0, -1]
]

// UnDirected graph
var incMatDir = [
  [1, 0, 1, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1]
]



// Graphs: Breadth-First Search
// distance between two nodes in the graph

function bfs(graph, root) {
  var nodesLen = {};
  
  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0; 
  
  var queue = [root]; 
  var current; 

  while (queue.length != 0) {
    current = queue.shift();
    
    var curConnected = graph[current];
    var neighborIdx = []; 
    var idx = curConnected.indexOf(1); 
    while (idx != -1) {
      neighborIdx.push(idx); 
      idx = curConnected.indexOf(1, idx + 1); 
    }
    
    for (var j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]); 
      }
    }
  }
  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1));
// Object {
//   0: 2,
//   1: 0,
//   2: 1,
//   3: 3,
//   4: Infinity --- impossible to reach
// }