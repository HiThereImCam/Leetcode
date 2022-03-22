// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.

  let current = linkedList; // this is the head
  let next = linkedList.next;

  // what do I want to do?
  // if linkedList.value === linkedList.next
  // linkedList.next = linkedList.next.next
  // linkedList.next.value = null;

  while (current.next !== null) {
    // check if linkedList.value === linkedList.next.value
    // else iterate to the next node
    // linkedList
    if (current.value === current.next.value) {
      let tempNode = current.next.next;
      current.next.next = null;
      current.next = tempNode;
    } else {
      current = current.next;
    }
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
