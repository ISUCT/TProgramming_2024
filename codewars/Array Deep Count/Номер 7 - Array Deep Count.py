def deep_count(a):
    answer = len(a)
    for i in a:
        if type(i) == list:
            answer += deep_count(i)
    return answer