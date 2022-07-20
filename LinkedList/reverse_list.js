// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/*
  - takes in a head
  - reverse the linked list in-place
  
  A -> B -> C -> D
  D -> C -> B -> A
  
  A -> B -> C
  
  Do I take into account the length?
    - i could have a runner?
    
    a -> b -> c
    i        j
    if node at j not equal to null 
      keep going til it does
    
    - run til length - 1
      - is node.next at length - 1 null?
          - yes? we have found the end
    
    - need to think about odd/even lengths to prevent
      swapping already swapped nodes
      
    a b c d
    d b c a 1
    d c b a 2   if count is even, run only half?
    
    a b c 
    c b a       if count is odd, run only floor(length/2)
    
    plan
    i, j = 0
    totalLength = null -> dependent on j 
    
    iterate through linkedList
      - if node.next @ j === null
          - set totalLength to j
          - swap
          
    a -> b -> c
      - if I swap a with c
        - does b automatically point to c?
          - no
    could have prevj to keep track
    
    i, j = 0
    prevJ = j - 1
    
    
    
  
*/

const reverseList = (head) => {
  let prev = null;
  let current = head;

  /*
    a b c
    prev = null a b c
    current = a b c null
    current next = b null a b 
    next = b c null null
    next next = c null null 
    

  */

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

/**
 * need to do again
 */
