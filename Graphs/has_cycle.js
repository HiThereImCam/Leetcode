/*
  what i dont understand
    - how do i take care of empty arrays? 
    
  if any of the elements points back to a key
  return true
  
  if a 
    iterate through elements
        if any of the elements point back to a 
          return true 

    key
        - visited/visiting set
            - if you are visiting a node that you are currently visiting
              then that is a loop
            - a node can be said to be completely visited when you return
              from iterating through all of its neighbors
            - once back from iterating through the neighbors, remove the
              node from the visiting set to the visited set
                - prevents you from iterating through the nodes again
                    - this is a basecase

                
*/

const traverseGraph = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (traverseGraph(graph, neighbor, visiting, visited)) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

const hasCycle = (graph) => {
  let visited = new Set();
  let visiting = new Set();

  for (let key in graph) {
    if (traverseGraph(graph, key, visiting, visited) === true) {
      return true;
    }
  }

  return false;
};
