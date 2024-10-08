def anagrams(word, words):
    sorted_word = sorted(word)
    return [w for w in words if sorted(w) == sorted_word]
