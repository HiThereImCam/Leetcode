/*
    arr1 = [123, 543]
    arr2 = [321, 279]

    firstEleA1 = [5, 4, 3]
    firstEleA2 = [2, 7, 9]
    
    count = 12
    currA1 = 3
    currA2 = 9

*/

function minimumMoves(arr1, arr2) {
  //    let firstEleA1 = arr1[0].toString().split('')
  //    let secondEleA1= arr1[1].toString().split('')
  //    let firstEleA2 = arr2[0].toString().split('')
  //    let secondEleA2 = arr2[1].toString().split('')

  //    let count_of_First_Ele_A1_A2 = countEleA1A2(firstEleA1, firstEleA2)
  //    let count_of_Second_Ele_A1_A2 = countEleA1A2(secondEleA1, secondEleA2)

  let idx = 0;
  let count = 0;
  while (idx < arr1.length) {
    let splitA1 = arr1[idx].toString().split("");
    let splitA2 = arr2[idx].toString().split("");

    count += countEleA1A2(splitA1, splitA2);
    idx += 1;
  }

  return count;
}

function countEleA1A2(a1, a2) {
  let count = 0;

  let i = 0;

  while (i < a1.length) {
    let currA1 = parseInt(a1[i]);
    let currA2 = parseInt(a2[i]);

    count += Math.abs(currA1 - currA2);
    i += 1;
  }

  return count;
}
