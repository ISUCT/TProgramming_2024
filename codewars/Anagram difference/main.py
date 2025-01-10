from collections import Counter

def anagram_difference(w1, w2):
    c1 = Counter (w1)
    c2 = Counter (w2)
    c1.subtract(c2)
    return sum(map(abs, c1.values()))