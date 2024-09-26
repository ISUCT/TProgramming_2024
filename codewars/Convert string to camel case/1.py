def to_camel_case(text):
    if not text:
        return text
    
    words = text.replace('-', ' ').replace('_', ' ').split()
    
    if words:
        if text[0].isupper():
            words[0] = words[0].capitalize()
        else:
            words[0] = words[0].lower()
    
    camel_case_words = [words[0]] + [word.capitalize() for word in words[1:]]
    
    return ''.join(camel_case_words)

print(to_camel_case("the-stealth-warrior"))
print(to_camel_case("The_Stealth_Warrior"))
print(to_camel_case("The_Stealth-Warrior"))
print(to_camel_case(""))