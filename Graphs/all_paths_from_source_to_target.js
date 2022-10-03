const createGraph = (array) => {
  let result = {};

  for (let i = 0; i < array.length; i++) {
    result[i] = array[i];
  }

  return result;
};

var allPathsSourceTarget = function (arr) {
  let graph = createGraph(arr);

  let queue = [[0]]; // graph will always have a 0th node
  let res = [];
  let getLastEle = (arr) => arr[arr.length - 1];

  while (queue.length > 0) {
    let path = queue.shift();
    let lastNode = getLastEle(path);

    if (lastNode === arr.length - 1) {
      res.push([...path]);
    } else {
      for (let neighbor of graph[lastNode]) {
        queue.push([...path, neighbor]);
      }
    }
  }

  return res;
};
