import re

def pig_it(text):
    words = re.split(r'(\W+)', text)

    transformed_words = []
    for word in words:
        if re.match(r'[a-zA-Z]', word):
            transformed_word = word[1:] + word[0] + 'ay'
            transformed_words.append(transformed_word)
        else:
            transformed_words.append(word)

    return ''.join(transformed_words)