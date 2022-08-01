/*
  base case
    - if we have seen the neighbors already
        - we have come to a deadend
    - if the adjacency list is empty
        - we have come to a dead end
        
    keep track of every node we have visited
    return the count
    max = Math.max(max, count)
    
  
  
  simplest case
        a
  
  
*/

const traverseGraph = (graph, key, visited) => {
  if (visited.has(String(key))) return 0;

  visited.add(String(key));

  // for(let ele of graph[key]){
  //   return 1 + traverseGraph(graph, ele, visited) // <--- THIS SHORT CIRCUITS THE LOOP
  //                                                 //
  // }

  // to not short circuit the loop
  let size = 1;
  for (const neighbor of graph[key]) {
    size += traverseGraph(graph, neighbor, visited);
  }

  return size;
};

const largestComponent = (graph) => {
  let largest = 0;
  let visited = new Set();

  for (let key in graph) {
    console.log("visited: ", visited);
    if (!visited.has(String(key))) {
      let currCount = traverseGraph(graph, key, visited);
      largest = Math.max(currCount, largest);
    }
  }
  return largest;
};
