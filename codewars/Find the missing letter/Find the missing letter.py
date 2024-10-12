def find_missing_letter(chars):
    for i in range(1,len(chars)):
        tekush_char_code=ord(chars[i])
        next_char_code=ord(chars[i-1])

        if tekush_char_code-next_char_code>1:
            return chr(next_char_code+1)
    return