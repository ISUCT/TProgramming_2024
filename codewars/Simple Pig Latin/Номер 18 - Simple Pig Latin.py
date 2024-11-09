def pig_it(text):
    arr_letter = [chr(i) for i in range(97, 123)]
    x = ''
    answer = ''
    for i in range(len(text)):
        if text[i].lower() in arr_letter:
            x += text[i]
            if i == len(text) - 1:
                answer += x[1:] + x[0] + 'ay'
        else:
            if text[i].lower() not in arr_letter and x:
                answer += x[1:] + x[0] + 'ay'
                x = ''
            answer += text[i]
    return answer
