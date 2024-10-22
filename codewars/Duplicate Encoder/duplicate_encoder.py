def duplicate_encode(s):
    s = s.lower()
    
    char_count = {}
    for char in s:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    result = ""
    for char in s:
        if char_count[char] > 1:
            result += ")"
        else:
            result += "("
    
    return result
