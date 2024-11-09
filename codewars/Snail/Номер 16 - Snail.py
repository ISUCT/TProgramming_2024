def snail(snail_map):
    print(snail_map)
    if snail_map == [[]]:
        return []
    answer = []
    x_mn, y_mn = 0, 0
    x_mx, y_mx = len(snail_map) - 1, len(snail_map) - 1
    y_now, x_now = 0, 0
    while True:
        answer.append(snail_map[y_now][x_now])
        y_mn += 1
        while x_now < x_mx:
            x_now += 1
            answer.append(snail_map[y_now][x_now])
        x_mx -= 1
        while y_now < y_mx:
            y_now += 1
            answer.append(snail_map[y_now][x_now])
        y_mx -= 1
        while x_now > x_mn:
            x_now -= 1
            answer.append(snail_map[y_now][x_now])
        x_mn += 1
        while y_now > y_mn:
            y_now -= 1
            answer.append(snail_map[y_now][x_now])
        if x_mn > x_mx or y_mn > y_mx:
            break
        x_now += 1
    return answer