def anagrams(word, words):
    def sort_word(w):
        return ''.join(sorted(w))
    
    sorted_word = sort_word(word)
    
    return [w for w in words if sort_word(w) == sorted_word]

print(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
print(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
print(anagrams('laser', ['lazing', 'lazy', 'lacer']))