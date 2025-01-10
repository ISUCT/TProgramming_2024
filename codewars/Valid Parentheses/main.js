function  validParentheses(parens) {
    const stack = [];
    const matchingParenthesis = { ')': '(' };

    for (let i = 0; i < parens.length; i++) {
        const currentChar = parens[i];

        if (currentChar === '(') {
            stack.push(currentChar);
        } else if (currentChar === ')') {
            if (stack.length === 0 || stack.pop() !== matchingParenthesis[currentChar]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
