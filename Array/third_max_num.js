/*
    [0,1,2,3,4] third max: 2
    
    we could use mod
        - mod by the length of the array
            - down side is collisions
    
    we could use 3 pointers
        
    [23, 3, 1, 5] third max: 3
    
*/
var thirdMax = function(nums) {
    let first = {}
    let second = {}
    let third = {}
    
    nums.forEach((num, idx) => {
        // return if theres a dup
        if(num === first.num || num === second.num || num === third.num) return
        if(!first.num || num > first.num){
            third = second
            second = first 
            first = {num, idx}
        }else if(!second.num || num > second.num){
            third = second
            second = {num, idx}
        } else if(!third.num || num > third.num){
            third = {num, idx}
        }
    })
    
    if(!third.idx){
        if(first.num > second.num){
            return first.idx
        }else{
            return second.idx
        }
    }
    
    return third.num
};