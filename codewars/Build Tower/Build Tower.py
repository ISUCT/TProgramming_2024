def tower_builder(n_floors):
    width = n_floors * 2 - 1
    
    tower = []

    for i in range(n_floors):
        stars = '*' * (i * 2 + 1)
        
        spaces = ' ' * ((width - len(stars))//2)
        
        floor = spaces + stars + spaces
        
        tower.append(floor)
        
    return tower
