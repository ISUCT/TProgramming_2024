def sum_pairs(ints, s):
    seen = {}
    for i, num in enumerate(ints):
        complement = s - num
        if complement in seen:
            return [complement, num]
        seen[num] = i
    return None
