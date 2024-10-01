from math import sqrt


def fib_number(n):
    if n > 0:
        n += 1
    a = 0
    b = 1
    if n < 0:
        print("Incorrect input")
    elif n == 0:
        return a
    elif n == 1:
        return b
    else:
        for i in range(2, n):
            c = a + b
            a = b
            b = c
        return b


def product_fib(_prod):
    print(_prod)
    k = 0
    while True:
        if fib_number(k) * fib_number(k + 1) == _prod:
            return [fib_number(k), fib_number(k + 1), True]
        elif fib_number(k) * fib_number(k + 1) > _prod:
            return [fib_number(k), fib_number(k + 1), False]
        else:
            k += 1