/*
  iterate through the array
    -
    - create a new node with the value
    - need a prev
      - set prev to currentNode 
    
    map
      - where key is index
        - return map.get(0)
            - returns head of linked list 
      - value is node
      
    1 3 5 
    
    idx = 0 1 2 3 
    prev = null Node{val: 1, next: Node {val: 3, next: null}}
                Node{val: 3, next: null} Node{val: 3, next: Node{val: 3, next: null}}
                Node{val: 5, next: null}
    newNode: Node{val: 1, next: null}  Node{val: 1, next: Node {val: 3, next: null}}
             Node{val: 3, next: null} Node{val: 3, next: Node{val: 3, next: null}}
             Node{val: 5, next: null}
    map: {0: Node{val: 1, next: null}}  Node{val: 1, next: Node {val: 3, next: null}}
         {1: Node{val: 3, next: null}} Node{val: 3, next: Node{val: 3, next: null}}
         {2: Node{val: 5, next: null}}
*/

const createLinkedList = (values) => {
  if (values.length < 1) return null;
  let map = new Map();
  let idx = 0;
  let prev = null;
  while (idx < values.length) {
    let newNode = new Node(values[idx]);
    if (prev) {
      prev.next = newNode;
    }

    prev = newNode;
    map.set(idx, newNode);
    idx += 1;
  }

  return map.get(0);
};

/**
 Alvin sol

 const createLinkedList = (values) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  for (let val of values) {
    tail.next = new Node(val);
    tail = tail.next;
  }
  return dummyHead.next;
};
 */
