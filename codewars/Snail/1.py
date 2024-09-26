def snail(array):
    if not array or not array[0]:
        return []
    
    result = []
    top, bottom = 0, len(array) - 1
    left, right = 0, len(array[0]) - 1
    
    while top <= bottom and left <= right:
        for i in range(left, right + 1):
            result.append(array[top][i])
        top += 1

        for i in range(top, bottom + 1):
            result.append(array[i][right])
        right -= 1

        if top <= bottom:
            for i in range(right, left - 1, -1):
                result.append(array[bottom][i])
            bottom -= 1

        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(array[i][left])
            left += 1
    
    return result