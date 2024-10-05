def product_fib(prod):
    a, b = 0, 1

    while a * b <= prod:
        if a * b == prod:
            return [a, b, True]
        a, b = b, a + b

    return [a, b, False]
