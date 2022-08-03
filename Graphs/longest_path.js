/*
    keys
        - find all of the end nodes
        - iterate through each node in the graph
            - make recursive call that calculates the distance from node to end nodes
        - return the longest number of edges via the distances stored in obj
            - can spread object keys via (...Object.values(distance))


    below is wrong
*/

/*
  a: [c, b]
  b: [c]
  c: []
  
                     1
                  a -> b
              
                  c   1
  a -> b = 1
  b -> c = 1
  
  iterate through the object
    - i'm having trouble figuring out whether or not i should use a queue
    
    - case for dfs
       - what is my base case
        - if node does not point to anything 
       - as i iterate through the keys
         pass the graph,the current neighbor of graph[key]
  
  can I have
  {
    a: [c, b]
    b: [c]
    c: [b]
  }
*/

const findLongestPath = (graph, key) => {
  if (graph[key] === []) return 0;
  let count = 1;

  for (const neighbor of graph[key]) {
    console.log("graphKey: ", graph[key]);
    count += findLongestPath(graph, neighbor);
    console.log("neighbor: ", neighbor);
    console.log("count: ", count);
  }

  return count;
};

const longestPath = (graph) => {
  let count = 0;

  for (const key in graph) {
    let currLongest = findLongestPath(graph, key);

    count = Math.max(count, currLongest);
  }

  console.log(count);
};

/*
    Alvin's sol
*/

const longestPathAlv = (graph) => {
  let distance = {};
  for (const node in graph) {
    // FINDS ALL THE TERMINATING NODES
    if (graph[node].length === 0) {
      graph[node] = 0;
    }
  }

  for (const node in graph) {
    traversePath(graph, node, distance);
  }

  return Math.max(...Object.values(distance)); // returns an array of the key's values
};

const traversePath = (graph, node, distance) => {
  // base case
  // if we have seen the graph[node], return it's current distance
  // current distance refers to distance away from terminating node
  if (node in graph) return distance[node]; //

  let maxDistance = 0;

  // iterate through neighbors
  for (let neighbors in graph[node]) {
    let currDistance = traversePath(graph, neighbors, distance);
    maxDistance = Math.max(maxDistance, currDistance);
  }

  // update the current nodes distance
  distance[node] = 1 + maxDistance;
  return distance[node];
};
