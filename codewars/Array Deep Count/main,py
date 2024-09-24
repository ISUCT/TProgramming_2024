def deep_count(a):
    count = 0
    for i in a:
        if type (i) == list:
            count += deep_count(i)
        count += 1
    return count