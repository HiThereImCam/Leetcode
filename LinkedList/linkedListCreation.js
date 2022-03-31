/*
 * Complete the 'createLinkedList' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function createLinkedList(head) {
  /*
        count = 1 -> head node 
        
       
        
        while tempHead.next !== null
        if count % 2 == 1 || currNode.next === null
            newNode.next = currNode
            currNode = currNode.next
            newNode = newNode.next
            newNode.next = null
            
        
        newNode{val: null, next: null}
        
        tempHead = head
        
        currNode = head{val: 1, next: Node}
        
        1 -> 5 -> 2 
        count = 1 
        
  
        
        
       
        
        newNode.next -> null -> 1 -> null
        tempHead -> 1 -> 5
        currentNode -> 1 -> 5
        newNode ->  null -> 1 
        
         currNode  = {val: 3, next: null}
         
        multiple pointers that will always have access to original head

        while tempHead.next !== null 
        
        Node{
            val: 
            next
            prev 
        }
    
      
      newNode
    1 -> 2 -> 8
    
    tempHead -> 5 -> 7 - 3  
    
    tempHead -> 5 -> 2      
    */

  let newNode = new SinglyLinkedListNode(null);
  let tempHead = head;
  let currNode = head;

  while (tempHead.next !== null) {
    if (count % 2 == 1 || currNode.next === null) {
      if (!currNode) {
        currNode = tempHead.next;
      }
      newNode.next = currNode;
      tempHead = currNode.next;
      currNode = currNode.next;
      newNode = newNode.next;
      newNode.next = null;
    }
    count += 1;
  }
}
