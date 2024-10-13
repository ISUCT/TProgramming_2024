def to_camel_case(text):
    answer = ''
    k = False
    for i in range(len(text)):
        if text[i] == '_' or text[i] == '-':
            k = True
        elif k:
            answer += text[i].upper()
            k = False
        else:
            answer += text[i]
    return answer
