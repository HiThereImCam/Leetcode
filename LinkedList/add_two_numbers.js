/*
    questions:
        - how to deal with carry over
        - since l1 and l2 are different lengths
            - have to deal with this
    
    
    we know that
        - the first node will always have the power of 0
            - 10 ^ 0 = 1 * the number = number
    
    
    idea: 
        - variables sumOfL1 && sumOfL2 set to 0
        - variables pow set to 0
        - iterate through both l1 && l2
            - add values to sumOfL1 and sumOfL2, respectively
        
        - add both sumOfL1 and sumOfL2
        - split and reverse sum of both
        - create new linkedList with reversed sum as values in node
        
        - check if l1 || l2 is not equal to null
            - if l1 || l2 is not equal to null
                - new linkedList.next points to the rest of l2
                
        return new linkedList
        
    
*/

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let currNode = (head = new ListNode());

  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const val = sum % 10;
    carry = Math.floor(sum / 10);

    // move nodes
    head.next = new ListNode(val);
    head = head.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return currNode.next;
};

/**
 *
 * 10/07/2022
 */

var addTwoNumbers = function (l1, l2) {
  let currNode = (head = new ListNode());
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    let val = sum % 10;
    carry = Math.floor(sum / 10);

    head.next = new ListNode(val);
    head = head.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return currNode.next;
};
