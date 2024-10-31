def digital_root(n):
    k=n
    b=0
    while len(str(k))>1:
        b=0
        k=str(k)
        for i in k:
            b+=int(i)
        k=b
    return (k)