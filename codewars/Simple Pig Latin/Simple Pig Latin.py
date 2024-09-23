import string

def pig_it(text):
    words = text.split()
    transformed_words = []
    
    for word in words:
        if word[-1] in string.punctuation:
            punctuation = word[-1]
            word = word[:-1]
        else:
            punctuation = ''
        
        if word:
            transformed_word = word[1:] + word[0] + 'ay' + punctuation
            transformed_words.append(transformed_word)
        else:
            transformed_words.append(punctuation)
    
    return ' '.join(transformed_words)
