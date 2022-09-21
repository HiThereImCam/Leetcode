/*
  A - B

  solving for: return a boolean indicating whether or not there exists a unique
               route for every pair of cities
               
   
    
    [A, C], [A, B], [B, C] return true because every route has a unique path
    
  
  type of traversal: depth first traversal
  
      
      
  strategy to solve this problem

  - this is a graph problem
  - I need a set to prevent cycles
  - iterate through neighbors of the node
  
  
  question that I need answered:
  - if i have found multiple routes from a starting point to an end point then
    return false

  - how do I know a path is not unique
    - if multiple routes take me to the same endpoint
    - how can we store this information
      - idea of an array and using the indices to store the count of how many times
        the current node has seen the a given endpoint
      - the indices represent the endpoints
      - the value at the indices represent the number of times the city has been visited
        via that current node
        
    ex:  0 - 1
         |
         2
         
    0: [1, 2]
    1: [0]
    2: [0]
    
    currNode: 0
    hasSeen: {
      0
    }
    visitedArr: [0, 0, 0]
    
    iterate through neighbors
      currNode: 1
      hasSeen: {
        0, 1
      }

      iterate through the neighbors
        currNode: 0
        [1, 0, 0]
      
    
    KEYY!!!
      - KEEP TRACK OF THE PREVIOUS NODE VISITED BY PASSING IT IN 
    
*/

const createGraph = (array) => {
  const graph = {};

  for (let subarray of array) {
    const [a, b] = subarray;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const rareRouting = (n, roads) => {
  const graph = createGraph(roads);
  const set = new Set();
  const visit = detectPath(graph, 0, null, set);
  return visit && set.size === n;
};

const detectPath = (graph, currNode, prevNode, set) => {
  if (set.has(currNode)) return false;

  set.add(currNode);

  // iterate through neighbors
  for (let neighbor of graph[currNode]) {
    if (
      neighbor !== prevNode &&
      detectPath(graph, neighbor, currNode, set) === false
    ) {
      return false;
    }
  }

  return true;
};
