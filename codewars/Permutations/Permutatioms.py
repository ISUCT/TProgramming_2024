import itertools

def permutations(input_string):
    all_permutations = itertools.permutations(input_string)
    
    unique_permutations = set(''.join(p) for p in all_permutations)
    
    return list(unique_permutations)
