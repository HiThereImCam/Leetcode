/*
  [A, B]
  where A must be taken before B 
  
  return minumum amount of semesters to complete all courses
  
  [
    [101, 102] 
    [201, 202]
  ]
  
  plan 
    - store all of the ending nodes
      - distance {
        '102': 0,
        '202': 0
      }
      - Set for classes taken
        - 2 prereq classes that can be chosen 
          - where you can choose either or to move on to the next class
        =
*/

const createGraph = (numCourses, prereqs) => {
  let newGraph = {};

  for (let i = 0; i < numCourses; i++) {
    newGraph[i] = [];
  }

  for (const prereq of prereqs) {
    let [firstClass, secondClass] = prereq;
    newGraph[firstClass].push(secondClass);
  }

  return newGraph;
};

const findSemestersAmount = (graph, node, distance) => {
  if (node in distance) return distance[node];

  let maxDistance = 0;
  for (const neighbor of graph[node]) {
    let neighborDistance = findSemestersAmount(graph, neighbor, distance);
    maxDistance = Math.max(maxDistance, neighborDistance);
  }

  distance[node] = maxDistance + 1;

  return distance[node];
};

const semestersRequired = (numCourses, prereqs) => {
  let graph = createGraph(numCourses, prereqs);

  let distance = {};
  for (const key in graph) {
    if (graph[key].length === 0) {
      distance[key] = 1;
    }
  }

  let semesterCount = 0;

  // iterate through graph
  for (const key in graph) {
    let currSemesterCount = findSemestersAmount(graph, key, distance);
    semesterCount = Math.max(semesterCount, currSemesterCount);
  }
  return Math.max(...Object.values(distance));
  //console.log(semesterCount)
};

/*

  8/7/22
  base case
    if have calculated the distance of a node already
    return the nodes distance
      - we do not want to loop
  
  
  things I couldn't figure out 
    - what do i do with numCourses
      - numCourses will act as  the total length of courses
        that are available to take
          - so classes will start from 0 < n < numCourses
    - what am I trying to return?
        - I'm trying to return the maxDistance
  
  watch out for []
*/


// 11/11/2022
/*
  we can build a graph via  {}
  
  {
    0: [5],
    1: [2],
    2: [4],
    3: [5],
    4: [],
    5: []
  }
  
  constraint
    - can there be cycles?
  
  what do we need?
    - visited Set
    - count 
  
  do I want the starting points?
    - if I have all the starting points aka keys that are not empty
        - iterate through all of the keys until i get to an key
          that does not have any children
        - update the count 
        
  idea
    - create a graph
    - create a queue of starting points
    - iterate through the queue
    - traverse through the children until I hit a child
      with no children
    - return count
*/

const createGraph2 = (numCourses, prereqs) => {
  let graph = {}
  
  for(let i = 0; i < numCourses; i += 1){
    graph[i] = []
  }
  
  for(let pair of prereqs){
    let [start, end] = pair
    graph[start].push(end)
  }
  return graph
}

// are there any other edge cases?
// how do I add?
// i'm not sure how to add

const traverse = (graph, currCourse, distance) => {
  if(currCourse in distance) return distance[currCourse]
  
  let maxCount = 0
  for(let neighbor of graph[currCourse]){
    let currCount = traverse(graph, neighbor, distance)
    maxCount = Math.max(maxCount, currCount)
  }

  distance[currCourse] = 1 + maxCount
  return distance[currCourse]
}

const semestersRequired2 = (numCourses, prereqs) => {
  const graph = createGraph(numCourses, prereqs)
  console.log(graph)
  // find the terminal node
  let distance = {}
  
  for(let node in graph){
    if(graph[node].length < 1) distance[node] = 1
  }
  
  for(let course in graph){
    traverse(graph, course, distance)
  }
  
  return Math.max(...Object.values(distance))
};
