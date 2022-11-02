/*
    1 2 3
        4 5
        6 7 9
        
    1 2 3 4 6 7 9 5 
    
    1 2 3
      4
      
    1 -> 2 
         - i see a child
         I have to keep track of the current node's next
        
          given the current node, it's next is 3 so push 3 on to the stack and go to the next node
          current node: 2
          next: 3
          child: 4
          stack = 3
          
          current node is 4
          if(currentNode.next === null) then we know that we're done with the level
          pop off the node that is on top of the stack and point the current nodes next to equal
          the popped off node
          
          currentNode = 4
          next: null
          child: null
          stack = 3
          
          currentNode.next = stack.pop()
          4 -> 3
   
   
   
   
   ordering of questions:
        - does my current node have child?
            - then we know we have to go to that child
        
        
    1 2 3       => 1 2 4 3 
      4
      
    stack: [3]
      
    currentNode: 1 
    next: 2
    prev: null
    child: null
    
    currentNode: 2 
    next: 4 
    prev: 1
    child: null
    
    currentNode: 4
    next: 3
    prev: 2
    child: null

    currentNode: 3
    next: null
    prev: 4
    child: null
    
    currentNode: null
*/
var flatten = function (head) {
  const stack = [];

  let currNode = head;

  while (currNode !== null) {
    if (currNode.child) {
      if (currNode.next) {
        stack.push(currNode.next); // [3]
      }

      let child = currNode.child;
      currNode.child = null;
      currNode.next = child;
      child.prev = currNode;
      currNode = child;
    } else if (currNode.next === null && stack.length > 0) {
      let next = stack.pop();
      currNode.next = next;
      next.prev = currNode;
      currNode = currNode.next;
    } else {
      currNode = currNode.next;
    }
    t;
  }

  return head;
};


// part 2
var flatten2 = function (head) {
  const stack = [];

  let currNode = head;

  while (currNode !== null) {
    if (currNode.child) {
      if (currNode.next) {
        stack.push(currNode.next); // [3]
      }

      let child = currNode.child;
      currNode.child = null;
      currNode.next = child;
      child.prev = currNode;
      currNode = child;
    } else if (currNode.next === null && stack.length > 0) {
      let next = stack.pop();
      currNode.next = next;
      next.prev = currNode;
      currNode = currNode.next;
    } else {
      currNode = currNode.next;
    }
    t;
  }

  return head;
};