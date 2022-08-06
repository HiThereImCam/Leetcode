/*
  create the graph
    - iterate through graph
  
  iterate through the graph
    - need a set to ensure that we do not go to same edge twice
    - 
    
  return false
  
  let result = [a, b, c]
  
  keep track of the neighbors within the adjacency list
  
  1.) create graph
  2.) iterate through graph
      a.) iterate through the list of neighbors
          if visted every neighbor and node not found
          return -1
          return length of result 
    
*/

const createGraph = (edges) => {
  let graph = {};

  for (let edge of edges) {
    const [nodeA, nodeB] = edge;

    graph[nodeA] ? graph[nodeA].push(nodeB) : (graph[nodeA] = [nodeB]);
    graph[nodeB] ? graph[nodeB].push(nodeA) : (graph[nodeB] = [nodeA]);
  }

  return graph;
};

const shortestPath = (edges, nodeA, nodeB) => {
  let graph = createGraph(edges);
  let visited = new Set([nodeA]); // set the current nodeA already
  let queue = [[nodeA, 0]];

  while (queue.length > 0) {
    let [currNode, dist] = queue.shift();

    // this doesnt work because
    // the node with the shortest distance will exit the queue
    // before any other node w/ same destination but longer path
    // if(currNode === nodeB){
    //   shortestPath = Math.min(shortestPath, dist)
    // }

    if (currNode === nodeB) return dist;

    for (let neighbor of graph[currNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }

  return -1;
};

/**
 8/6/22
 done but I should do again 
 anything calculating shortest distance should be bst
 i have to remember
  - array is for of
  - obj is for in 


key: queue = [[nodeA, 0]]
     visited set so that there are no infinite loops 
*/
