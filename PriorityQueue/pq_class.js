/*
  is it possible to have O(1) deletion? 
    - right now I'm thinking of O(n) deletion

  is it possible to use a set?
    - if I use a set and try to keep track of indices, how will that happen 
      when I sort()?

  what if
    - could I use the indices themselves as buckets?
      - that would eliminate the need to sort
        - this would only work for numerical values
        - what about alpha-numeric?

    
  what are some structures that give O(1) deletion?
    - objects, Set, map

  can we use any of these?
    - the issue is
      - how can I remap the indicies?
      - I don't think this is possible in it current state
        - maybe there might be another way to implement?




*/

// lets sort by ages from oldest -> youngest
// the values passed will look like
// {name: Cameron, age: 29}
// i think what I was missing was trying to figure out what to compare to
//


// Note:

/**
 * Add
 * T(c) - O(n log n)
 * S(c) - O(n)
 * 
 * Delete
 * T(c) - O(n)
 * S(c) - O(n - 1)
 * 
 */
class PriorityQueue{
    constructor(){
      this.pQueue = []
    }

  seePQ(){
    return this.pQueue
  }
  
  add(info){
    this.pQueue.push(info)
    this.pQueue.sort((a,b) => b.age - a.age) // sort in descending order
  }

  delete(){
    if(this.pQueue.length < 1) return "Empty queue"
    const userInfo = this.pQueue.shift()
    return userInfo
  }

}


const pq = new PriorityQueue()
pq.add({name: 'Cameron', age: 29})
pq.add({name: 'Patrick', age: 60})
pq.add({name: 'Rose', age: 61})
pq.add({name: 'Tiana', age: 27})
pq.add({name: 'Tiffanie', age: 35})
pq.add({name: 'Ronald', age: 36})
pq.add({name: 'Momo', age: 5})

console.log("current queue: ", pq.seePQ())
console.log("first in line: ", pq.delete())
console.log("queue after shift: ", pq.seePQ())