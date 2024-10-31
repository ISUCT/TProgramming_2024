def anagram_difference(w1, w2):
    count_w1 = [0] * 26
    count_w2 = [0] * 26
    for char in w1:
        count_w1[ord(char) - ord('a')] += 1
    for char in w2:
        count_w2[ord(char) - ord('a')] += 1
    deletions = sum(abs(count_w1[i] - count_w2[i]) for i in range(26))
    return deletions