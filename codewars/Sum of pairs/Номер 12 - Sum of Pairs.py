def sum_pairs(ints, s):
    answer = {}
    for i in ints:
        if s - i in answer:
            return [s - i, i]
        answer[i] = True