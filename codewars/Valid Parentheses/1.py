def valid_parentheses(string):
    balance = 0
    
    for char in string:
        if char == '(':
            balance += 1
        elif char == ')':
            balance -= 1
        
        if balance < 0:
            return False
    
    return balance == 0

print(valid_parentheses("()"))
print(valid_parentheses(")(()))"))
print(valid_parentheses("("))
print(valid_parentheses("(())((()())())"))