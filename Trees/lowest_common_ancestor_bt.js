/*
    attempt on 04/12/22

    original idea
        hasSeen obj
            - map where key is nodeValue and value is parent node

        iterate through tree til both p && q are found
            - keep track of nodes within a hasSeen obj
        
        after both p && q are found iterate through hasSeen obj
            - add paths to array
        
    where I got in trouble 
        - even in an array  how do I know that this value at this index 
          is the lowest common ancestor?


    optimal idea
        - base case
            - if !currNode || currNode === p || currNode === q 
                return currNode
        - if you find both p && q
            - on return from recursive call, return currentNode
        - if you find p and !q or vice versa
            - return the found node

        this works because if p is found and q is descendent of 
        p, you will never find q because of the base case. therefore,
        p must be the lowest common ancestor.

        i really like this ternary statemnt

        return (p && q) ? root : (p || q)

        
        

*/
