const createGraph = (edges) => {
  let graph = {};
  for (const subArray of edges) {
    const [nodeA, nodeB] = subArray;

    graph[nodeA] ? graph[nodeA].push(nodeB) : (graph[nodeA] = [nodeB]);
    graph[nodeB] ? graph[nodeB].push(nodeA) : (graph[nodeB] = [nodeA]);
  }

  return graph;
};

const findPath = (graph, nodeA, nodeB) => {
  let queue = [nodeA];
  let set = new Set();

  while (queue.length > 0) {
    let currEle = queue.shift();
    if (!set.has(currEle)) {
      set.add(currEle);
    } else {
      continue;
    }

    if (currEle === nodeB) return true;

    for (let ele of graph[currEle]) {
      queue.push(ele);
    }
  }

  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  let graph = createGraph(edges);

  return findPath(graph, nodeA, nodeB);
};

// need to do recursive
