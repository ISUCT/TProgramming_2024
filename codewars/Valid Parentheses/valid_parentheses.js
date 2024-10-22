function validParentheses(input) {
    let stack = [];
    for (let char of input) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(validParentheses("()"));              
console.log(validParentheses(")(()))"));          
console.log(validParentheses("("));               
console.log(validParentheses("(())((()())())"));  