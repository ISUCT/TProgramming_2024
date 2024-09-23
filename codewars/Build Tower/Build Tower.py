def tower_builder(n_floors):
    tower = []
    width = 2 * n_floors - 1  
    for i in range(n_floors):
        stars = 2 * i + 1
        spaces = (width - stars) // 2
        
        floor = ' ' * spaces + '*' * stars + ' ' * spaces
        tower.append(floor)
    
    return tower
