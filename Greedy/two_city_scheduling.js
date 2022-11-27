/*
    assumptions
        - there are no negative numbers
        - I assume that costs[i] will always have a length of 2
        - costs length will always be greater than or equal to 2
        
    ex 1: [[10,20],[30,200],[400,50],[30,20]] 
            - 2(4) = 8
            - n = 4 meaning exactly 4 people total
                - 2 going to A 
                - 2 going to B
                
        - cost.length will always be even 
        
        - sort by first
        
        [[10, 20], [30, 200], [30, 20], [400, 50]]
               
        [[10, 20],[30,20], [400,50],[30, 200]]                     
        result = 10 + 30 + 20 + 50 = 110
        
        [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
            
        result = 259 + 54 + 926 + 139 + 118 + 577
        cityA = 1 
        cityB = 2
*/
var twoCitySchedCost = function(costs) {
    let num = costs.length / 2
    let result = 0
    
    costs.sort((a,b) => {
        cityA = a[0] - a[1]
        cityB = b[0] - b[1]
        
        return cityA - cityB
    })
    
    for(let i = 0; i < costs.length; i++){
        const [cityA, cityB] = costs[i]
        
        if(i < num){
            result += cityA
        }else{
            result += cityB
        }
    }
    
    return result
};