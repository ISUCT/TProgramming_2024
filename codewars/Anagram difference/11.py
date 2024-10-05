from collections import Counter


def anagram_difference(w1, w2):
    count1 = Counter(w1)
    count2 = Counter(w2)

    remove_count = 0

    all_chars = set(count1.keys()).union(set(count2.keys()))

    for char in all_chars:
        remove_count += abs(count1.get(char, 0) - count2.get(char, 0))

    return remove_count
