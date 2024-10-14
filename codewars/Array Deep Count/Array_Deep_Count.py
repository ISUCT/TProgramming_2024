def R(a):
    b = 0
    for i in a:
        if type(i) == list:
            b += R(i)
        b += 1
    return b

def deep_count(a):
    return R(a)