/*
    nums = [1,1]
    

    eleObj={
        '1': 2
    }
    
    num: 3
    sum: 4
*/

var sumOfUnique = function(nums) {
    let sum = 0
    let eleObj = {}
    
    for(let num of nums){
        if(num in eleObj){
            eleObj[num] += 1
        }else{
            eleObj[num] = 1
        }
    }
    
    for(let num in eleObj){
        if(eleObj[num] === 1){
            sum += parseInt(num)
        }
    }
    
    return sum
};