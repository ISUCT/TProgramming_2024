def product_fib(_prod):
    fib1 = 0
    fib2 = 1
    while fib1*fib2 < _prod:
        fib1, fib2 = fib2, fib1 + fib2
    arr = []
    a = False
    arr.append(fib1)
    arr.append(fib2)
    if fib1 * fib2 == _prod:
        a = True
    else:
        a = False
    arr.append(a)
    return arr