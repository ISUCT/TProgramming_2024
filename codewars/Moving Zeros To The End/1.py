def find_missing_letter(letters):
    for i in range(len(letters) - 1):
        current_ascii = ord(letters[i])
        next_ascii = ord(letters[i + 1])

        if next_ascii - current_ascii > 1:
            return chr(current_ascii + 1)

    return None