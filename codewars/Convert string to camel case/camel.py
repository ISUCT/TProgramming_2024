def to_camel_case(text):
    if len(text) == 0:
        return ""
    d = ""
    c = ""
    for i in range(len(text)):
        if text[i] == "-" or text[i] == "_":
            d += " "
        else:
            d += text[i]
        d = d.title()
    for j in range(len(d)):
        if d[j] == " ":
            c += ""
        else:
            c += d[j]
    if text[0] == text[0].lower():
        c = c.replace(c[0],c[0].lower())
    return c