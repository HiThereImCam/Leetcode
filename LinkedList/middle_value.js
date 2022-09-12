const middleValue = (head) => {
  let result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  let mid = result.length / 2;

  if (mid % 2 === 0) {
    return result[mid];
  } else {
    let midFloor = Math.floor(mid);
    return result[midFloor];
  }
};
