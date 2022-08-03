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
