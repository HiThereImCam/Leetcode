def is_palindrome(x)

stringify_x = x.to_s

half = (stringify_x.length/2).floor    
startIdx = 0
endIdx = stringify_x.length - 1
    
    while startIdx <= half do
        if stringify_x[startIdx] != stringify_x[endIdx]
            return false
        end 
        startIdx += 1
        endIdx -= 1
    end
    
    return true
    
end