def duplicate_encode(word):
    word = word.lower()

    frequency = {}
    for char in word:
        if char in frequency:
            frequency[char] += 1
        else:
            frequency[char] = 1

    result = ""
    for char in word:
        if frequency[char] == 1:
            result += "("
        else:
            result += ")"

    return result
