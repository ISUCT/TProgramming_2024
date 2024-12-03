def duplicate_encode(word):
    word = word.lower()
    count = {}

    for char in word:
        count[char] = count.get(char, 0) + 1

    result = ""
    for char in word:
        result += "(" if count[char] == 1 else ")"

    return result