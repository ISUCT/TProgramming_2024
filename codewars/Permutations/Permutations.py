def permutations(s):
    if len(s) == 0:
        return ['']
    perm_list = []
    for i in range(len(s)):
        m = s[i]
        remaining_list = s[:i] + s[i+1:]
        subperm_list = permutations(remaining_list)
        for p in subperm_list:
            perm_list.append(m + p)
    return set(perm_list)
print(permutations('abc'))
