/*
    min number of arrows to BURST ALL BALLOONS
    
    12    
    11  
    10                  --------------------           
    9
    8
    7
    6
    5
    4             -------------
    3   -------------
    2 ----------- 
    1                   
    0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
    
ex: [[2,8], [1,6]]
    [[1,6], [2,8]]
  
    
    
    
    3
    2-  
    1 --                
    0123

    [[1,1], [2,3]]
    
    if I shoot vertically starting at x = 1, i only hit 1
    if I shoot vertically starting at x = 2, i only hit 2
    
    
    questions that I need to think about
        - how do I deal with values that overlap
        - it is like meeting rooms II
            - Priority Queue/Sort
            - need to sort
        - how do I want to initialize
            - how do I want to iterate through the sorted array?
                - can iterate one at a time
                - set prev to null and count to 0
            
    Idea
        - to sort by the end
        - if we start from the starting balloon (b/c sorted)
            - there are 2 possible states
                - Balloon starts before the first balloon ends
                - Balloon starts after the first balloon ends
        - 
*/

var findMinArrowShots = function(points) {
    const sortedPoints = points.sort((a,b) => a[0] - b[0])
    let count = 0
    let prev = null
    
    for(let [start, end] of sortedPoints){
        if(prev == null || prev < start){
            //[[1,5], [6,8]]  then you know that you need to shoot
            // another arrow
            count += 1
            prev = end
        }else{
           prev = Math.min(prev,end)
            // reset prev to new min width
        }
    
    }
    return count
};

// 11/23/2022
var findMinArrowShots = function(points) {
    let sortedPoints = points.sort((a,b) => a[0] - b[0])
    let prev = null
    let count = 0
    
    for(let [start, end] of sortedPoints){
        if(prev == null || prev < start){
            count += 1
            prev = end
        }else{
            prev = Math.min(prev, end)
        }
    }
    
    return count
};