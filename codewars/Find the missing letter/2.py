def find_missing_letter(chars):
    for i in range(len(chars) - 1):
        current_char = ord(chars[i])
        next_char = ord(chars[i + 1])

        if next_char != current_char + 1:
            return chr(current_char + 1)
