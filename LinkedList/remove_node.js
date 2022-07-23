const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;

  let prevNode = null;
  let currNode = head;

  while (currNode !== null) {
    if (currNode.val === targetVal) {
      // 4 -> 5 -> 6 targetVal = 5
      // 4 -> 6
      prevNode.next = currNode.next;
      break;
    }

    prevNode = currNode;
    currNode = currNode.next;
  }

  return head;
};
