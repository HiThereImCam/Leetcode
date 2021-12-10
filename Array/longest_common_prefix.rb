def check_common_prefix(strs)
    first_char = strs[0][0]
    strs.each do |word|
        if word[0] != first_char
            return false
        end
    end
    
    return true
end 



def longest_common_prefix(strs)
    # create a new hash
    string_hash = Hash.new
    prefix = ""
    prefix_value = 0
    
    if !check_common_prefix(strs)
        return ""
    end
    
    for word in strs
      input = word.split("")   
        
      word_attr = ""
        
      input.each do |char_ele|
        word_attr << char_ele
        
        if string_hash[word_attr]
            string_hash[word_attr] += 1
        else
            string_hash[word_attr]  = 1
        end
      end
    end 
    
    
    string_hash.each do |attr_name, attr_value|
        if attr_name.length > prefix.length && attr_value >= prefix_value
            prefix = attr_name
            prefix_value = attr_value
        end
    end
    
   prefix
end