from collections import Counter

def anagram_difference(w1, w2):
    count1 = Counter(w1)
    count2 = Counter(w2)
    
    total_removals = 0
    
    all_chars = set(count1.keys()).union(set(count2.keys()))
    
    for char in all_chars:
        total_removals += abs(count1.get(char, 0) - count2.get(char, 0))
    
    return total_removals

w1 = "codewars"
w2 = "hackerank"
print(anagram_difference(w1, w2))