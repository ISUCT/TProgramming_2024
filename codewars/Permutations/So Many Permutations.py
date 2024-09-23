def permutations(s):
    if len(s) == 1:
        return [s]

    result_set = set()

    for i in range(len(s)):
        char = s[i]
        remaining_chars = s[:i] + s[i+1:]
        remaining_permutations = permutations(remaining_chars)

        for perm in remaining_permutations:
            result_set.add(char + perm)

    return list(result_set)