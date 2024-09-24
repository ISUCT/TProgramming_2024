def to_camel_case(text):
    flag = False
    ans = ''
    for t in text:
        if t == '_' or t == '-':
            flag = True
            continue
        else:
            if flag == True:
                t = t.upper()
            ans = ans + t
            flag = False
    return ans