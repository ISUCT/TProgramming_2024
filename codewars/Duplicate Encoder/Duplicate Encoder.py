def duplicate_encode(s):
    char_count ={}
    for char in s.lower():
        char_count[char] = char_count.get(char, 0) + 1
    result = ""
    for char in s:
        result += "(" if char_count[char.lower()] == 1 else ")"
    return result
print(duplicate_encode("(( @"))
