def valid_parentheses(string):
    count_open_brackets = 0
    for i in string:
        if i == '(':
            count_open_brackets += 1
        elif i == ')':
            if count_open_brackets == 0:
                return False
            count_open_brackets -= 1
    if count_open_brackets == 0:
        return True
    return False