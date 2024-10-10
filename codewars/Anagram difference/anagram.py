def anagram_difference(w1, w2):
    count = 0 
    len_w1 = len(w1)
    len_w2 = len(w2)
    if type(w1) == str:
        w1 = list(w1)
    if type(w2) == str:
        w2 = list(w2)
    for i in w1:
        if i in w2:
            count += 1
            w2.remove(i)
    print(w1, w2)
    return len_w1 - count + len_w2 - count
