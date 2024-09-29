def move_zeros(lst):
    count = 0
    listok = []
    for i in lst:
        if i == 0:
            count += 1
        else:
            listok.append(i)
    for j in range(count):
        listok.append(0)
    return listok