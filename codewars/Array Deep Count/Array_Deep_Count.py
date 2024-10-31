def deep_count(x):
    summ = 0
    for i in x:
        summ += 1
        if isinstance(i, list):
            summ += deep_count(i)
    return summ