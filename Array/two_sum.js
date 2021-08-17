function addArrayValuesToObj(array) {
  let comparisonObj = {};
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    if (!comparisonObj[array[i]]) {
      comparisonObj[array[i]] = count;
    } else {
      comparisonObj[array[i]] += 1;
    }
  }

  return comparisonObj;
}

// account for values that are copies of one another
function twoNumberSum(array, targetSum) {
  let comparisonObj = addArrayValuesToObj(array);

  for (let idx = 0; idx < array.length; idx++) {
    let compliment = targetSum - array[idx];
    let complimentEqualToArrVal = compliment === array[idx];

    if (complimentEqualToArrVal && comparisonObj[compliment] === 2) {
      return [compliment, array[idx]];
    }

    if (!complimentEqualToArrVal && comparisonObj.hasOwnProperty(compliment)) {
      return [compliment, array[idx]];
    }
  }

  return [];
}
