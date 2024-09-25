import string

def pig_it(text):
    def transform_word(word):
        if word not in string.punctuation:
            return word[1:] + word[0] + 'ay'
        return word
    
    words = text.split()
    transformed_words = [transform_word(word) for word in words]
    return ' '.join(transformed_words)
