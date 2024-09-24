def move_zeros(lst):
    n = lst.count(0)
    while 0 in lst[:-n]:
        lst.append(lst.pop(lst.index(0)))
    print(lst)
    return lst