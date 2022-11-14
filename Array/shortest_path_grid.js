/*
    - questions I couldn't answer
        - Not sure what the space complexity would be
        
    -idea
        - iterating through the grid
            - 
*/

const inBounds = (grid, row, col) => {
    if(
        row < 0 || 
        row >= grid.length ||
        col < 0 || 
        col >= grid[0].length
    ) return false
    
    return true
}

var shortestPath = function(grid, k) {
    const visited = new Set()
    let queue = [[0, 0, k, 0]] // where 0 is the distance
    
    while(queue.length){
        console.log("queue: ", queue)
        let [row, col, currK, dist] = queue.shift()

        if(row === grid.length - 1 && col === grid[0].length - 1) return dist
    
        // add the current position to our visited set
        let pos = row + ',' + col
        visited.add(pos)
        
        let deltas = [[-1, 0], [1,0], [0, -1], [0, 1]]
        
        for(let delta of deltas){ 

            let [deltaR, deltaC] = delta
            const neighborR = deltaR + row
            const neighborC = deltaC + col
            const neighborPos = neighborR + ',' + neighborC
            
            /*
                when do I want to add to the queue 
                    - if position is not OB
                    - obstacle(1)
            */
            
            if( inBounds(grid, neighborR, neighborC) && !visited.has(neighborPos)){
                if(grid[neighborR][neighborC] === 1 && currK >= 1){
                    queue.push([neighborR, neighborC, currK - 1, dist + 1])
                } else if(grid[neighborR][neighborC] === 0){
                    queue.push([neighborR, neighborC, currK, dist + 1])
                } else{
                    continue
                }
            }
            
        }
    }
    
    return -1
};