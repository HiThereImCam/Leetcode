const linkedListCycle = (head) => {
  let set = new Set();

  while (head !== null) {
    if (set.has(head.val)) {
      return true;
    } else {
      set.add(head.val);
    }
    head = head.next;
  }

  return false;
};
