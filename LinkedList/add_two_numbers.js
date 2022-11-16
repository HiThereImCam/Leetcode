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

/* 11/16/2022 */

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

// 2 4 3 reversed 
// 5 6 4 reveresed

// 3 4 2
// 4 6 5

// 8	0	7

// we capture the carry over

// 0 - 9

// 3 4 2		// l1
// 	2 5   // l2
 
// 3 6 7 

// 2 4 3		// l1
// 5 2

// 7 6 3

// we have to create a new linkedlist
// 	- where new head node



// idea
// 	- variable that we use to check for carry over (0 or 1)
//   - iterate through both l1 and l2
//     - we create a new node and set it's value to l1 + l2 + carryOver
//     - we set we the current head's next of the linkedList to this new node
//     - update the pointer 
    
// 	- if !l1 add the rest of l2
//   - if !l2 add the rest of l1
  
// 	- return the original head
  



const addTwoNumbers = (l1, l2) => {
	const head = new Node()
  const temp = head
  let carry = 0
  
  while(l1 && l2){
  	const currNode = new Node()
    
    if(l1?.val && l2?.val)
    {
    	let currVal = l1.val + l2.val + carry
    
      if(currVal > 10){
        currVal = currVal % 10
        carry = 1
      }else{
      	carry = 0
      }

      currNode.val = currVal

      temp.next = currNode
      temp = temp.next

      l1 = l1.next
      l2 = l2.next
    }else{
    	break
    }
  }
  
  
  if(!l1){
  	const newNode = new Node()
    newNode.val = carry + l2.val
    temp.next = newNode
  }
  
  if(!l2){
  	const newNode = new Node()
    newNode.val = carry + l1.val
    temp.next = newNode
  }
  
  return head.next
}
