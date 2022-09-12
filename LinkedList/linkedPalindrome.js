/*
  ideas
  
  - iterate through linkedlist
  add every val to array
  two-pointers
*/

const linkedPalindrome = (head) => {
  if (head === null) return true;
  let result = []; // use result as a stack?

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  let i = 0,
    j = result.length - 1;

  while (i < j) {
    if (result[i] !== result[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;
};
