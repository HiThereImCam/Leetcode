/*
  will the subarray always be length 2? yes
    I will always have a pair
  
  is it possible to have two people point at the same person? yes
    - [sam, cat]
    - [sam, carly]
    
    [cat,carly]
    [sam]
    
  
  phillip cannot be with seb
  seb cannot be with phillip
  
  raj cannot be with nader
  nader cannot be with raj
  
  object with an adjacency list
  
  obj = {
    raj: [nader],
    nader: [raj]
    phillip: [seb],
    seb: [phillip]
  }
  
  how can we use this to our advantage?
  

  
  
*/

const createGraph = (rivalries) => {
  let graph = {};
  for (let rivals of rivalries) {
    const [a, b] = rivals;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const traverseGraph = (graph, node, partners, currPartner) => {
  // what is our basecase?
  if (node in partners) return partners[node] === currPartner;

  partners[node] = currPartner;

  for (let neighbor of graph[node]) {
    if (traverseGraph(graph, neighbor, partners, !currPartner) === false) {
      return false;
    }
  }

  return true;
};

const tolerantTeams = (rivalries) => {
  let graph = createGraph(rivalries);
  console.log("graph: ", graph);
  let partners = {};

  for (let node in graph) {
    if (
      !(node in partners) &&
      traverseGraph(graph, node, partners, false) === false
    ) {
      return false;
    }
  }

  return true;
};
