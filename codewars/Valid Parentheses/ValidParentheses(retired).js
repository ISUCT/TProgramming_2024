function validParentheses(parens) {
    let a = 0;
    for(let i of parens) {
        if (i === '(') {
            a++;
        } else if (i===')') {
            a--;
            if (a<0) {
                return false;
            }
        }
    }
    return a === 0;
}