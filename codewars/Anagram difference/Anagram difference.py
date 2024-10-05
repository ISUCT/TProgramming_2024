from collections import Counter

def anagram_difference(word1, word2):
    count1 = Counter(word1)
    count2 = Counter(word2)
    
    total_removals = 0
    
    all_letters = set(count1.keys()).union(set(count2.keys()))
    
    for letter in all_letters:
        total_removals += abs(count1.get(letter, 0) - count2.get(letter, 0))
    
    return total_removals
