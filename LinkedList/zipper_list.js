// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/*
  - takes 2 node heads
    - create 1 linked list by alternating nodes
  
  
  head 1 a b c d
  head 2 e f g h
  
  a e b f c g d h 
  time complexity - O(n)
  space complexity - O(1) no extra space is needed
  
  
  make head1 node main list
  
  constraints?
    - how should i deal with lists that do not have the 
      same length?
    
    head1 = a b c
    head2 = e f
    
    a e b f c
    
    head1 = a b
    head2 = e f g
    
    head1 = a
    head2 = e
    
    let nextNode = head1.next
    let head2next = head2.next
    let insertedNode = head2
    
    a -> e -> b
    head1.next = insertedNode
    insertedNode.next = nextNode
    
    update head2
    head2 = head2next
    
    a -> e -> b
    f -> g

*/

/*
  head 1: a -> b -> c   a->d->b->c 
  head 2: d -> e -> f   e->f
  
  currentHead1 = a
  currentHead2 = d
  
  head1Next = b
  head2Next = e
  insertedNode = d
  
  just because you use variables to represent the head
  doesnt mean that you're creating extra space
*/

const zipperLists = (head1, head2) => {
  let currentHead1 = head1;
  let currentHead2 = head2;
  let head1Next = currentHead1.next;
  let head2Next = currentHead2.next;
  let insertedNode = currentHead2;

  while ((currentHead1 && currentHead2) !== null) {
    currentHead1.next = insertedNode;
    insertedNode.next = head1Next;
    currentHead2 = head2Next;
    currentHead1 = insertedNode.next;
  }

  return head1;
};

/**
 * NEED TO DO AGAIN!
 */

/*
  add dummyHead
  
  head1 = a -> b -> c
  head2 = x -> y -> z
  
  currHead1 = a b
  currHead2 = x y
  currentNode = null x 
  
  currentNode -> a -> x
  a -> x -> b -> y -> c ->   
  
*/

const zipperListsPart2 = (head1, head2) => {
  let dummyHead = new Node();
  let currentNode = dummyHead;
  let currentHead1 = head1;
  let currentHead2 = head2;
  let count = 0;

  while (currentHead1 !== null && currentHead2 !== null) {
    if (count % 2 === 0) {
      currentNode.next = currentHead1;
      currentHead1 = currentHead1.next;
    } else {
      currentNode.next = currentHead2;
      currentHead2 = currentHead2.next;
    }

    currentNode = currentNode.next;
    count += 1;
  }

  if (!currentHead1) currentNode.next = currentHead2;
  if (!currentHead2) currentNode.next = currentHead1;

  return dummyHead.next;
  //console.log("dummyHead next: ", dummyHead.next)
};
