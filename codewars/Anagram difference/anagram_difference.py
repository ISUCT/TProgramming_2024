def anagram_difference(w1, w2):
    count_w1 = {}
    count_w2 = {}

    for char in w1:
        count_w1[char] = count_w1.get(char, 0) + 1

    for char in w2:
        count_w2[char] = count_w2.get(char, 0) + 1

    deletions = 0
    all_chars = set(count_w1.keys()).union(count_w2.keys())

    for char in all_chars:
        deletions += abs(count_w1.get(char, 0) - count_w2.get(char, 0))

    return deletions