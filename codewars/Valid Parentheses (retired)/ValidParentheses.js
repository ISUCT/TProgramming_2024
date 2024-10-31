function validParentheses(parens) {
    let counter1 = 0;       //(
    let counter2 = 0;       //)
    for (const x of parens) {
        if (x == '(') {
            counter1++;
        } else {
            counter2++;
        }
    }
    if (parens[0] == ')' || parens[parens.length - 1] == '(') {
        return false;
    } else {
        if (counter1 == counter2) {
            return true;
        } else {
            return false;
        }
    }
}


console.log(validParentheses(("())(")));