def pig_it(text):
    alph = [chr(i) for i in range(97, 123)]
    x = ""
    ans = ""
    for i in range(len(text)):
        if text[i].lower() in alph:
            x += text[i]
            if i == len(text) - 1:
                ans += x[1:] + x[0] + "ay"
        else:
            if text[i].lower() not in alph and x:
                ans += x[1:] + x[0] + "ay"
                x = ""
            ans += text[i]
    return ans  