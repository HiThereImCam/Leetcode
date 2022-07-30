/*
              1
            2   3
            
        at each level we know there are at least- level nodes
        
        we can keep track of the level via {}
        result = []
        
        [[1], [2,3], [4,5,6]] => n^2
        can we do better?
        NOTE!
          - THIS IS NOT N^2
            - because the subArrays are not the same length
            - as the original array
            - it's O(M + N) where M is the subArray
        
        level = 0
        count = 1
        sum = 0
        is level === nodeLevel
            sum += current node val
        if not
            let avg = sum/count
            result.push(avg)
        
        
        
        1
      2   3
      
      
      queue = [{1, 0}]
      result = []
      nodeCount = 1
      
      node = 1
      nodeLevel = 0 
      sum = 1
      queue= [{2, 1}, {3, 1}]
      
      node = 2
      nodeLevel = 1
      
      
*/

const levelAveragesBad = (root) => {
  let result = [];
  let sum = 0;
  let currentLevel = 0;
  let nodeCount = 1;
  let queue = [{ node: root, level: 0 }];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    const { node, nodeLevel } = currentNode;

    if (currentLevel === nodeLevel) {
      sum += node.val;
    } else {
      let avg = sum / nodeCount;
      result.push(avg);
      currentLevel += 1;
      nodeCount += 1;
      sum = node.val;
    }

    if (node.left) queue.push({ node: node.left, level: nodeLevel + 1 });
    if (node.right) queue.push({ node: node.right, level: nodeLevel + 1 });
  }
};
// above incorrect

const getSubLevels = (root, levels, levelNum) => {
  if (!root) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  getSubLevels(root.left, levels, levelNum + 1);
  getSubLevels(root.right, levels, levelNum + 1);
};

const levelAverages = (root) => {
  let levels = [];
  getSubLevels(root, levels, 0);

  return levels.map(getAvg); // this works because it returns a newArray
  // notice that I am not invoking getAvg
  // as I increment over the elements, getAvg will get invoked
};

const getAvg = (array) => {
  let sum = 0;
  for (let ele of array) {
    sum += ele;
  }

  return sum / array.length;
};
