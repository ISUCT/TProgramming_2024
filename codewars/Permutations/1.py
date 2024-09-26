from itertools import permutations as perm

def permutations(s):
    all_perms = perm(s)
    
    unique_perms = set(''.join(p) for p in all_perms)
    
    return list(unique_perms)

print(permutations('a'))
print(permutations('ab'))
print(permutations('abc'))
print(permutations('aabb'))