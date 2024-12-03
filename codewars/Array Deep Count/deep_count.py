def deep_count(a):
    sum_total = 0

    for i in a:
        sum_total += 1
        if isinstance(i, list):
            sum_total += deep_count(i)

    return sum_total