def digital_root(n):
    b = str(n)
    sum = 0
    for i in range(len(b)):
        sum += int(b[i])
    if sum > 9:
        return digital_root(sum)
    return sum