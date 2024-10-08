def productFib(prod):
    n = 0
    nPlus = 1
    while n * nPlus < prod:
        nPlus = n + nPlus
        n = nPlus - n
    return [n, nPlus, n * nPlus == prod]
