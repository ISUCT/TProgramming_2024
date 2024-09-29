import itertools
def permutations(s):
    arr = []
    permutations = list(itertools.permutations(s))
    for i in permutations:
        arr.append("".join(i))
    return list(set(arr))