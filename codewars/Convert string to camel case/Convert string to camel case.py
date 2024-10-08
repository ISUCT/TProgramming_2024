def to_camel_case(s):
    if not s:
        return ""
    words = s.replace('-', ' ').replace('_', ' ').split()
    camel_case = words[0] + ''.join(word.capitalize() for word in words[1:])
    return camel_case
print(to_camel_case("the-stealth-warrior"))
print(to_camel_case("The_Stealth_Warrior"))
print(to_camel_case("The_Stealth-Warrior"))
print(to_camel_case(""))
