def anagram_difference(word1, word2):
    from collections import Counter
    return sum((Counter(word1) - Counter(word2)).values()) + sum((Counter(word2) - Counter(word1)).values())
