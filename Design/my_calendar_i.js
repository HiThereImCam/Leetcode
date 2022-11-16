
var MyCalendar = function() {
    this.stack = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */

MyCalendar.prototype.addInterval = function(start,end){
    this.stack.push([start, end])
}


MyCalendar.prototype.book = function(start, end) {
    if(this.stack.length < 1){
        this.addInterval(start,end)
        return true
    }else{
        let [prevStart, prevEnd] = this.stack[this.stack.length - 1]
        
        if(start >= prevEnd){
            this.addInterval(start,end)
            return true
        }
    }
        
    return false
    
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

/*
    double booking
        - two events have some non-empty intersection
        
    event
        - represented by a pair of integers start and end 
        - start <= x < end 
        
    returns true of the event can be added w/o a double booking
    
    first question
        - how do we want to store start and end?
    
    
    we will always want the most up to date schedule
    
    stack?
        - always look at the top
        - this will help us control what elements are pushed in
        
    is there anything else that we can think of?
        - 
    
*/

/*
    did not get it
*/