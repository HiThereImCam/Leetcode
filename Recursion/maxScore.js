// Given an array of integers and some number K, find the maximum score you can create.

// You can grab from the far left or far right each time, once one number is taken, you can not take that number again.

// Example -
// [ 2, 25, 6, 21, 3 ] , k = 2 // Output => 27
// 	-> [2, 25, 6, 21]
// 		24 | 27

// [25, 6, 21, 3]

// [4, 2, 1, 11] k = 3

// 11 -> [4, 2 1]
// 	-> 4 [2, 1]
// 		- [2] = 17

// 				[ 2, 25, 6, 21, 3 ] k = 2

// 		25   + 	2 = 27					   3 + 21 = 24

// 		[25, 6, 21, 3]				        [2. 25. 6. 21]

// 	25 			3			    2		       21

// 	If(level > k) return 0

// [1] k =
// k  < arr.length
// [2 1 25] k = 2
// 27
// 			 	[2 1 25]
// 			2		   	25
// 		[1,25]				[2,1]

// [1, 25]  k = 1

// [ 2, 25, 6, 21, 3 ] k = 2

// Level: 1
// first : 2
// last : 3

// takeFirst: 2 + 25 = 27
// takeLast: 3 + 21 = 24

// 27

function maxScore(arr, k, level = 1) {
  if (level > k) return 0;

  let first = arr[0]; // 1
  let last = arr[arr.length - 1]; // 25

  let takeFirst = first + maxScore(arr.slice(1), k, level + 1);
  let takeLast = last + maxScore(arr.slice(0, arr.length - 1), k, level + 1);

  return (memo[key] = Math.max(takeFirst, takeLast));
}

// key = L + R + K

// const first = arr[L]
// const last = arr[R]

// const takeFirst = first + maxScore(arr, L + 1, R, K, level + 1)
// const takeLast = last + maxScore(arr, L, R - 1, K, level + 1)

// 					       L       R
// [ 2, 25, 6, 21, 3 ] k = 3

// 				2					3

// 		25			3		  2				21

// 	6 	     3		 21	  25         25           21
//      1       10

// obj {
// 	0: 2
// 	0, 1: 27
// 	0, 1, 4: 30

// }
