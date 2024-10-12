from collections import Counter

def anagram_difference(w1, w2):

    count1 = Counter(w1)
    count2 = Counter(w2)
    total_removals = 0

    all_letters = set(count1.keys()).union(set(count2.keys()))
    for letter in all_letters:
        total_removals += abs(count1.get(letter, 0) - count2.get(letter, 0))

    return total_removals