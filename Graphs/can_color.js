const traverseGraph = (graph, node, colors, currColor) => {
  // if the color already stored in color is the same
  // as the currColor, return true
  // if the color stored was red and currColor is blue,
  // we would have tried to turn the red color blue and that would be incorrect
  if (node in colors) return colors[node] === currColor;

  colors[node] = currColor;

  for (let neighbor of graph[node]) {
    if (traverseGraph(graph, neighbor, colors, !currColor) === false) {
      return false;
    }
  }

  return true;
};

const canColor = (graph) => {
  let colors = {};

  for (let currNode in graph) {
    if (
      !(currNode in colors) &&
      traverseGraph(graph, currNode, colors, false) === false
    ) {
      return false;
    }
  }

  return true;
};
