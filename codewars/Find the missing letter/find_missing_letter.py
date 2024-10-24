def find_missing_letter(chars):
    for i in range(len(chars) - 1):
        curr_char = ord(chars[i])
        next_char = ord(chars[i + 1])

        if next_char != curr_char + 1:
            return chr(curr_char + 1)
