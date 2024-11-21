def to_camel_case(text):
    if not text:
        return text

    words = text.replace('-', ' ').replace('_', ' ').split()
    camel_case_words = [words[0]] + [word.capitalize() for word in words[1:]]

    return ''.join(camel_case_words)