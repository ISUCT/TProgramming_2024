from collections import Counter

def anagram_difference(word1, word2):
    count1 = Counter(word1)
    count2 = Counter(word2)

    removals = 0

    all_chars = set(count1.keys()).union(set(count2.keys()))

    for char in all_chars:
        removals += abs(count1.get(char, 0) - count2.get(char, 0))
    
    return removals