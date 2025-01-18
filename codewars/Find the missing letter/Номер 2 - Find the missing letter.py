def find_missing_letter(chars):
    print(ord('a'))
    print(ord('b'))
    for i in range(len(chars) - 1):
        if ord(chars[i + 1]) - ord(chars[i]) != 1:
            return chr(ord(chars[i]) + 1)