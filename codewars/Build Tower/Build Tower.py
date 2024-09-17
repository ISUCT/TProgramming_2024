def tower_builder(n_floors):
    tower = []
    for i in range(1, n_floors + 1):
        num_spaces = n_floors - i
        num_stars = 2 * i - 1
        tower.append(" " * num_spaces + "*" * num_stars + " " * num_spaces)
    return tower
print(tower_builder(2))
