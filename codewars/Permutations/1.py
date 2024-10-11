import itertools

def permutations(s):
    perm = itertools.permutations(s)
    unique_permutations = set(''.join(p) for p in perm)
    return list(unique_permutations)