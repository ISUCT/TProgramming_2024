def tower_builder(n_floors):
    answer = []
    mx = 1 + 2 * (n_floors - 1)
    for i in range(n_floors):
        if i == 0:
            count_star = 1
        else:
            count_star = 1 + 2 * i
        count_space = (mx - count_star) // 2
        answer.append(' ' * count_space + '*' * count_star + ' ' * count_space)
    return answer