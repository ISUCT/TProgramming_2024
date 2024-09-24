def duplicate_encode(word):
    res = ""
    word = word.lower()
    for i in word:
        if word.count(i) > 1:
            res += ")"
        else:
            res += "("
    return res
