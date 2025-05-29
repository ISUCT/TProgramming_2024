def valid_parentheses(string):
    brackets_left = 0
    for i in string:
        if i == '(':
            brackets_left += 1
        elif i == ')':
            if brackets_left == 0:
                return False
            brackets_left -= 1
    if brackets_left == 0:
        return True
    return False