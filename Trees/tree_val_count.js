/*
          target = 1 
          
          1
        2  3
        
          1   target
        1    2
          1 1
      
      what don't i understand?
        - how to keep update the current count
        - do I want to keep a count
        - 
      
      if(root.val === target){
        count += 1 
      }
*/

const treeValueCount = (root, target) => {
  if (!root) return 0;
  let found = root.val === target ? 1 : 0;
  return (
    found +
    treeValueCount(root.left, target) +
    treeValueCount(root.right, target)
  );
};
