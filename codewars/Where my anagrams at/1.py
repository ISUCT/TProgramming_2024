def anagrams(word, words):
    sorted_word = sorted(word)

    anagram_list = []

    for w in words:
        sorted_w = sorted(w)

        if sorted_w == sorted_word:
            anagram_list.append(w)
    
    return anagram_list