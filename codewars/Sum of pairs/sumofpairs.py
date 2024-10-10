def sum_pairs(ints, s):
    total = {}
    for i in ints:
        if s - i in total:
            return [s - i, i]
        total[i] = True   