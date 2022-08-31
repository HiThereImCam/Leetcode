// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// Example 1:

// Input: m = 3, n = 7
// Output: 28

// At least one path

// (0,0) -> (0,1) 


// // R O O
// // O O O
// // O O F

// {
// 	0 0
// 	0 1
// 	0 2
// 	1 2
// 	1 3
// } valid positions 

// // can only move either  down or right

// main driver function
// 	-  keep the count
// 	- have visited set
// 	- iterate through the grid
// 		- helper function traverses the neighbors of the current pos


// helper function
// 	-  ob
// 	- check for visited
// 	- check if value is finish line
// 	- traverse the neighbors



const robotPath = (grid) => {
	let  visited = {}
	let  count = 0
	count += traverseGrid(grid, 0, 0, visited)
   	return  count
}


const  traverseGrid = (grid, r, c, visited) => {
	if( 
		r >= grid.length ||
		c  >= grid[0].length
) return 0

if (r === grid.length - 1 && c === grid[0].length - 1) return 1

let  pos = r + ',' + c
if(pos in visited) return visited[pos]

// traverse through neighbors 

	visited[pos] = traverseGrid(grid, r + 1, c, visited) + traverseGrid(grid, r, c + 1, visited))
	return  visited[pos]
}
