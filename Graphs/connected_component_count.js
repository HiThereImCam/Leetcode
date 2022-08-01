let traverseGraph = (graph, key, visited) => {
  if (visited.has(String(key))) {
    return;
  } else {
    visited.add(String(key));
  }

  for (let ele of graph[key]) {
    traverseGraph(graph, ele, visited);
  }

  return true;
};

const connectedComponentsCount = (graph) => {
  let visited = new Set();
  let count = 0;

  for (let key in graph) {
    if (!visited.has(String(key))) {
      traverseGraph(graph, key, visited);
      count += 1;
    }
  }

  return count;
};

// do again

/*
    Alvin sol cleaner w/ boolean in helper func

    if we have seen the value already
        return false
    
    back in regular function
        count does not add 1
  */

const connectedComponentsCountAlv = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};
