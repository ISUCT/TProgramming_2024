def deep_count(a):
    count = len(a)
    for i in range(len(a)):
        if type(a[i]) == list:
            count += deep_count(a[i])
    return count