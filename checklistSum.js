let checklistSum = (inputArr) => {
  let totalCheckSum = 0;
  for (let row = 0; row < inputArr.length; row++) {
    let largestNum;
    let smallestNum;

    for (let col = 0; col < inputArr[row].length; col++) {
      let currentNum = inputArr[row][col];

      // initialize largestNum and smallestNume
      if (col === 0) {
        largestNum = currentNum;
        smallestNum = currentNum;
      }

      if (currentNum < smallestNum) {
        smallestNum = currentNum;
      }

      if (currentNum > largestNum) {
        largestNum = currentNum;
      }
    }

    if (inputArr[row].length === 0) {
      checklistArr.push(0);
    } else {
      let sum = Math.abs(largestNum) - Math.abs(smallestNum);
      totalCheckSum += sum;
    }
  }

  return totalCheckSum;
};

console.log(checklistSum([[-15, -1, -9, -5], [7, 5, 3], [2]]));
