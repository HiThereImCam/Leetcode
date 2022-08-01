/*

  given
    graph
    a source node 
    a destination node
    
    
    iterate through graph to see if src has a path to dst
    
    return boolean
    
    a --> c
          |
          V
          b
    a: [c]
    b: []
    c: [b]

    dst = b
    queue = [a] [] [c] [] [b]

*/

const hasPath = (graph, src, dst) => {
  let queue = [src];

  while (queue.length > 0) {
    let currEle = queue.shift();
    if (currEle === dst) return true;

    for (let ele of graph[currEle]) {
      queue.push(ele);
    }
  }

  return false;
};

/*
      a: [c]
      b: []
      c: [b]
      
      src = a
      dst = b
      
      graph[src] = c
      
      what dont i understand
        - when do i return false?
            - 
  */
const hasPathRecursive = (graph, src, dst) => {
  if (src === dst) return true;
  for (let ele of graph[src]) {
    // if the return value of hasPath is true
    // return true
    if (hasPath(graph, ele, dst) === true) {
      return true;
    }
  }
  return false;
};
