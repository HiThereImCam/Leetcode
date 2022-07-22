var mergeTwoLists = function (l1, l2) {
  /*
        list1 = [1,2,4], list2 = [1,3,4]
        
        create temp nod
        
        head = tempNode
        
        list1Val = 1 2 4
        list2Val = 1 3 4
        
        currNode = tempNode -> list1:1 -> list2:1  -> list1:2 -> list2:3 -> list1:4 -> list2:4 
        
        if list1.val <= list2.val    
           currNode.next = list1
           list1 = list1.next
        else 
            currNode.next = list2
            list2 = list2.next
            
            
        update currNode -> currNode.next
        
        edge cases: if currentNode === null and list2.next is node
                    list1 = list2
     
    */

  let tempNode = new ListNode(null);
  let head = tempNode;
  let currNode = tempNode;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      currNode.next = l1;
      l1 = l1.next;
    } else {
      currNode.next = l2;
      l2 = l2.next;
    }

    currNode = currNode.next;
  }

  if (!l1 && l2) {
    currNode.next = l2;
  }

  if (!l2 && l1) {
    currNode.next = l1;
  }

  head = head.next;
  return head;
};

const mergeLists = (head1, head2) => {
  /*
    DUMMY HEAD
  */
  let dummyHead = new Node();

  let currentHead1 = head1;
  let currentHead2 = head2;
  let tail = dummyHead;

  while (currentHead1 !== null && currentHead2 !== null) {
    if (currentHead1.val < currentHead2.val) {
      tail.next = currentHead1;
      tail = currentHead1;
      currentHead1 = currentHead1.next;
    } else {
      tail.next = currentHead2;
      tail = currentHead2;
      currentHead2 = currentHead2.next;
    }
  }

  if (currentHead1 === null) {
    tail.next = currentHead2;
  }
  if (currentHead2 === null) {
    tail.next = currentHead1;
  }

  return dummyHead.next;
};
