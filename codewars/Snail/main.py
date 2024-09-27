def snail(snail_map):
    top = 0
    bot = len(snail_map) - 1
    left = 0
    right = len(snail_map[0]) - 1

    res = []

    while top <= bot and left <= right:
        for i in range(left, right + 1):
            res.append(snail_map[top][i])
        top += 1

        for i in range(top, bot + 1):
            res.append(snail_map[i][right])
        right -= 1

        if top <= bot and left <= right:
            for i in range(right, left - 1, -1):
                res.append(snail_map[bot][i])
            bot -= 1

            for i in range(bot, top - 1, -1):
                res.append(snail_map[i][left])
            left += 1

    return res

array1 = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
expected1 = [1, 2, 3, 6, 9, 8, 7, 4, 5]
assert snail(array1) == expected1

array2 = [[1, 2, 3],
          [8, 9, 4],
          [7, 6, 5]]
expected2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
assert snail(array2) == expected2
