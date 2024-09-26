def product_fib(prod):
    a, b = 0, 1
    
    while a * b < prod:
        a, b = b, a + b
    
    if a * b == prod:
        return [a, b, True]
    else:
        return [a, b, False]

print(product_fib(714))
print(product_fib(800))