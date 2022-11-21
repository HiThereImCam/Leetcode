
/*
    entrance
        - tuple
        - denotes row and column of the cell you are initially standing at

    empty cells
        - represented as '.'
    
    walls
        - represented as '+'
        
    we can only move up, down, left, or right 
        - if cell contains a '+' || OB 
            - cannot step
    
    what do we need to find
        - we to find the exit
            - exit defined as an empty cell at the border of the maze
            
    
    returning number of steps in the shortest path 
    
  BFS (Breadth first Traversal)  
    - queue
    - Set to maintain our visited pos
    - at the initial pos
        - check the neighbors (left, right, up, down)
            - we would only add the pos to queue if
                - not seen
                - not OB
                - not a '+'
                
    idea
        - helper functions
            - check if we're OB
            - check if we're at an exit
        
        - main driver
            - 
            
    [   0   1  2  3  4
     0  [+, +, +, +, +],
     1  [+, ., ., ., +],
     2  [+, ., ., ., +],
     3  [+, ., ., ., +],
     4  [+, ., ., ., +],
     5  [+, +, +, +, +]
    
    ]
    
    EDGE CASE THAT WAS MISSED
        - when starting position is at an exit
*/
    

// first row and last row
// first col and last col
const isExit = (row, col, maze) => {
    if(
        row == 0 || 
        row == maze.length - 1 || 
        col == 0 ||
        col == maze[0].length - 1
    ) return true
    
    return false
}

const inBounds = (row, col, maze) => {
    if(
        row < 0 ||
        row >= maze.length ||
        col < 0 || 
        col >= maze[0].length
    ){
        return false
    }
    return true
}

var nearestExit = function(maze, entrance) {
    const visited = new Set()
    const [initRow, initCol ] = entrance
    const initPos = initRow + ',' + initCol
    visited.add(initPos)
    const queue = [[initRow, initCol, 0]] // where 0 in this case is the distance
    
    while(queue.length > 0){
        const [row, col, dist] = queue.shift()
        
        let pos = row + ',' + col
        if(isExit(row,col, maze) &&
           !visited.has(pos)
          ){
            return dist
        }
        

        visited.add(pos)
        
        const deltas = [[0,-1],[0,1],[1,0],[-1,0]]
        
        for(const delta of deltas){
            const [dRow, dCol] = delta
            const neighborR = dRow + row
            const neighborC = dCol + col
            const neighborPos = neighborR + ',' + neighborC
            
            if(
                inBounds(neighborR, neighborC, maze) &&
                !visited.has(neighborPos) &&
                maze[neighborR][neighborC] !== '+' 
            ){
                queue.push([neighborR, neighborC, dist + 1 ])
            }
        }
    }
    
    
    return -1
};