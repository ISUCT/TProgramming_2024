def snail(array):
    if len(array) == 0:
        return []
    if len(array) == 1:
        return array[0]
    
    top = array[0][:-1]
    right = [a[-1] for a in array]
    bottom = array[-1][:-1][::-1]
    left = [b[0] for b in array[1:-1]][::-1]
    inner = [c[1:-1] for c in array[1:-1]]
    
    return top + right + bottom + left + snail(inner)
