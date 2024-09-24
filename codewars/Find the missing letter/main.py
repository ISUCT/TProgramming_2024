def find_missing_letter(chars):
    ascii_value = ord(chars[0])
    ans = " "
    for i in chars:
        if ascii_value < (ord(i)):
            ans = chr(ascii_value)
            break
        ascii_value += 1
    return ans