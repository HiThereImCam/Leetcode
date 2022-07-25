const insertNode = (head, value, index) => {
  let newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let count = 0;
  let currNode = head;

  while (currNode !== null) {
    if (count === index - 1) {
      let next = currNode.next;
      currNode.next = newNode;
      newNode.next = next;
    }

    currNode = currNode.next;
    count += 1;
  }

  return head;
};
