import string

def pig_it(text):
    words = text.split()
    
    transformed_words = []
    for word in words:
        if word not in string.punctuation:
            transformed_word = word[1:] + word[0] + 'ay'
            transformed_words.append(transformed_word)
        else:
            transformed_words.append(word)
    
    return ' '.join(transformed_words)

print(pig_it('Pig latin is cool'))
print(pig_it('Hello world !'))