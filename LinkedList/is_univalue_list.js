const iterateList = (currentNode, countContainer) => {
  if (currentNode === null) return;
  if (!countContainer.includes(currentNode.val)) {
    countContainer.push(currentNode.val);
  }

  iterateList(currentNode.next, countContainer);
};

const isUnivalueListRecursive = (head) => {
  //   let countContainer = []
  //   let currentNode = head

  //   while(currentNode !== null){
  //     if(!countContainer.includes(currentNode.val)){
  //       countContainer.push(currentNode.val)
  //     }
  //     currentNode = currentNode.next
  //   }

  //   if(countContainer.length > 1){
  //     return false
  //   }else{
  //     return true
  //   }

  let countContainer = [];
  iterateList(head, countContainer);
  return countContainer.length > 1 ? false : true;
};

const isUnivalueListIterative = (head) => {
  let countContainer = [];
  let currentNode = head;

  while (currentNode !== null) {
    if (!countContainer.includes(currentNode.val)) {
      countContainer.push(currentNode.val);
    }
    currentNode = currentNode.next;
  }

  if (countContainer.length > 1) {
    return false;
  } else {
    return true;
  }
};

/*
    alvin sol
 const isUnivalueList = (head) => {
  let current = head;
  
  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }
  
  return true;
}

7 -> 7 -> 7 true
7 -> 7 -> 4 false
*/
