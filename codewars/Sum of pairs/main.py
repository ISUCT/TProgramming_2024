def sum_pairs(ints, s):
    seen = {}  # Словарь для хранения чисел и их индексов
    for i, num in enumerate(ints):
        complement = s - num
        if complement in seen:
            return [complement, num]
        seen[num] = i
    return None