def anagram_difference(w1, w2):
    if type(w1) == str:
        w1 = list(w1)
    if type(w2) == str:
        w2 = list(w2)
    ln_w1 = len(w1)
    ln_w2 = len(w2)
    len_anagram = 0
    for i in w1:
        if i in w2:
            len_anagram += 1
            w2.remove(i)
    if len_anagram == ln_w1 and len_anagram == ln_w2:
        return True
    return False