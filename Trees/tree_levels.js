/*
                  a
              b        c
            d  e         f
            
            [
              [a]
              [b,c]
              [d,e,f]
            ]
                
              - stack(?)
            
            height of tree at root - 0
            but has 1 element
            
            height = 0
            
            collection
              - if collection >= height + 1
                - then push collection into result
                
            stack idea
              - stack = [root]
                - this is an answer
                  - pop off stack
                   push children in 
                  - chldren is an answer 
                    pop off stack and push children in
            
            what don't i understand
              - how do I handle a sublevel that does not have the full amount
                leaves?
                i.e level 3
                    only 3 nodes


    KEY
    queue = {node: node, level: 0}

    Efficiencies 
        if(levels.length === level)
            - if levels length === level
                - we know that there isn't an element at current level index
                - we can just set it
        otherwise
            - just push the current node at its given level
            
*/

const treeLevels = (root) => {
  let result = [];
  let level = 0;
  let stack = [{ node: root, level: level }];

  while (stack.length > 0) {
    let ele = stack.pop();
    const { node, nodeLevel } = ele;
    if (!result[level] && nodeLevel === level) {
      result[level] = [node.val];
    } else if (result[level && nodeLevel === level]) {
      result[level].push(node.val);
    }

    if (result[level].length === level + 1) {
      level += 1;
    }

    if (node.right) stack.push({ node: node.right, level: level });
    if (node.left) stack.push({ node: node.left, level: level });
  }

  return result;
};

// Alvin's sol
const treeLevelsAlv = (root) => {
  if (root === null) return [];

  const levels = [];
  const queue = [{ node: root, levelNum: 0 }];
  while (queue.length > 0) {
    const { node, levelNum } = queue.shift();

    if (levels.length === levelNum) {
      levels[levelNum] = [node.val];
    } else {
      levels[levelNum].push(node.val);
    }

    if (node.left !== null)
      queue.push({ node: node.left, levelNum: levelNum + 1 });
    if (node.right !== null)
      queue.push({ node: node.right, levelNum: levelNum + 1 });
  }

  return levels;
};

// did it again and got it

/*
  how do we know we are on the right level
  
  return an array
  [] <- level 0
  
  check index at 0
    if !arr[0]
      [root.val]
    else
      array[at index].push(root.val)
      
        a
      b   c
  
  result = [] -> [['a']] -> [['a'], ['b', 'c']]
  queue = [{node: a, idx: 0}] [] [{node: b, idx: 1}] [{node: c, idx + 1}]
  node = a b c
  idx = 0 1 1
      
*/
const treeLevelsPart2 = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [{ node: root, idx: 0 }];

  while (queue.length > 0) {
    let { node, idx } = queue.shift();

    if (!result[idx]) {
      result[idx] = [node.val];
    } else {
      result[idx].push(node.val);
    }

    if (node.left) queue.push({ node: node.left, idx: idx + 1 });
    if (node.right) queue.push({ node: node.right, idx: idx + 1 });
  }

  return result;
  //console.log(result)
};

// PART 3

/*
  iterate through each level of the tree
  we can use the indices an array to help us keep track of where
  we are in the tree
  
              a -> level 0
          b       c   -> level 1
      d     e       f     -> level 2
      
    result array = [[a]] 
                 = [[a] [b]]
                 
    as we iterate through each node
      - we can attach a level property to keep track of where we are
    
    breadth first traversal
      - queue
      
      
    easiest case to take care of
    [[a]]
    
    
*/

const treeLevels3 = (root) => {
  if (root === null) return [];
  let result = [];
  let queue = [{ node: root, level: 0 }];

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (result[level] !== undefined) {
      result[level].push(node.val);
    } else {
      result[level] = [node.val];
    }

    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  return result;
};
