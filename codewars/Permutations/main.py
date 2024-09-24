import itertools

def permutations(s):
    perms = itertools.permutations(s)
    unique_perms = set(''.join(p) for p in perms)
    return list(unique_perms)