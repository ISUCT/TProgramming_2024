import itertools
def permutations(s):
    answer = []
    a = itertools.permutations(s)
    for i in a:
        answer.append(''.join(i))
    return list(set(answer))
