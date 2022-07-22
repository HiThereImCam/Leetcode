/*
  5 -> 4 -> 5 not consecutive
  
  5 -> 5 -> 4
  
  iterate til node === null
    
  
  let topChar = head.val
  let charCount = 0;
*/

const longestStreak = (head) => {
  let maxCount = 0;
  let currCount = 0;
  let currNode = head;
  let prevVal = null;

  while (currNode !== null) {
    if (currNode.val === prevVal) {
      currCount += 1;
    } else {
      currCount = 1;
    }

    if (currCount > maxCount) {
      maxCount = currCount;
    }
    prevVal = currNode.val;
    currNode = currNode.next;
  }

  return maxCount;
};
