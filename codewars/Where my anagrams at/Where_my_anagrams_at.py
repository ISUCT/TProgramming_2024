def anagrams(word, words):
    a = [0] * 26
    for c in word:
        a[ord(c) - 97] += 1
    ans = []
    for s in words:
        b = [0] * 26
        for c in s:
            b[ord(c) - 97] += 1
        p = 1
        for i in range(26):
            if a[i] != b[i]:
                p = 0
                break
        if p == 1:
            ans.append(s)
    return ans