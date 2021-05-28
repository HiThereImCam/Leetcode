/**
 * Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

 

Example 1:

Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum underlined below:
[[2,1,3],      [[2,1,3],
 [6,5,4],       [6,5,4],
 [7,8,9]]       [7,8,9]]

Example 2:

Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is underlined below:
[[-19,57],
 [-40,-5]]

Example 3:

Input: matrix = [[-48]]
Output: -48

 */

var minFallingPathSum = function (matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let topCenter = matrix[i - 1][j];
      let topRight = matrix[i - 1][j + 1];
      if (topRight === undefined) {
        topRight = Infinity;
      }

      let topLeft = matrix[i - 1][j - 1];

      if (topLeft === undefined) {
        topLeft = Infinity;
      }

      // top left or top right check if exists then infinity
      matrix[i][j] += Math.min(topLeft, topCenter, topRight);
    }
  }

  return Math.min(...matrix[matrix.length - 1]);
};