const addLists = (head1, head2) => {
  let sum = 0;
  let currNode1 = head1;
  let currNode2 = head2;
  let i = 0;
  while (currNode1 !== null && currNode2 !== null) {
    sum =
      sum + currNode1.val * Math.pow(10, i) + currNode2.val * Math.pow(10, i);

    i += 1;
    currNode1 = currNode1.next;
    currNode2 = currNode2.next;
  }
  if (currNode1 === null) {
    while (currNode2 !== null) {
      sum = sum + (currNode2.val + Math.pow(10, i));
      i += 1;
      currNode2 = currNode2.next;
    }
  }
  if (currNode1 === null) {
    while (currNode1 !== null) {
      sum = sum + (currNode1.val + Math.pow(10, i));
      i += 1;
      currNode2 = currNode1.next;
    }
  }

  let sumStr = sum.toString();
  let head = new Node(null);
  let currNode = head;
  for (let i = sumStr.length - 1; i >= 0; i--) {
    currNode.val = sumStr[i];
    let nextNode = new Node(null);
    currNode.next = nextNode;

    currNode = nextNode;
  }

  return head;
};
