/*
  plan
    - create graph
    - {
      0: [1, 2]
      1: [3]
      2: [3]
      3: []
      4: [5]
      5: []
    }
      - {key: index, val: []}
      
    What would return false?
    
      -  cannot complete all the courses?
          - what does this mean?
      - 
      
    {
      0: [1, 2]
      1: [3]
      2: [3]
      3: [0]
      4: [5]
   }
   
   looking for cycles?
    - visiting, visited
    
    2 sets
      - visiting/visited 
      - if i run into a node that I am visiting,
        return false
        
    how do i take care of empty node?
        - if empty nothing
    
*/

const createGraph = (numCourses, prereqs) => {
  let graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let subArr of prereqs) {
    const [first, second] = subArr;
    graph[first].push(second);
  }

  return graph;
};

const detectCycle = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, visiting, visited)) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

const prereqsPossible = (numCourses, prereqs) => {
  let graph = createGraph(numCourses, prereqs);
  let visited = new Set();
  let visiting = new Set();

  for (let node in graph) {
    // if cycle found
    // all classes cannot be taken. return false
    if (detectCycle(graph, node, visiting, visited)) {
      return false;
    }
  }

  return true;
};
