def deep_count(a):
    count = 0
    for element in a:
        count += 1
        if isinstance(element, list):
            count += deep_count(element)
    return count

print(deep_count([]))
print(deep_count([1, 2, 3]))
print(deep_count(["x", "y", ["z"]]))
print(deep_count([1, 2, [3, 4, [5]]]))