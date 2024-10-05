def pig_it(text):
    words = text.split()

    changed_words = []
    for word in words:
        if word.isalpha():
            changed_word = word[1:] + word[0] + 'ay'
            changed_words.append(changed_word)
        else:
            changed_words.append(word)

    return ' '.join(changed_words)
