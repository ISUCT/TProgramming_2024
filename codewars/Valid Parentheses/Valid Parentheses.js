function validParentheses(parens) {
    let openingBracket = []
    let closingCheker = {
        ')' : '('
    }
    for (let i = 0; i < parens.length; i++) {
        letter = parens[i];
        if (letter == '(') {
            openingBracket.push(letter);
        } else if (letter == ')') {
            if (openingBracket.length == 0 || openingBracket.pop() !== closingCheker[letter]){
                return false;
            }
        }
    }
    return openingBracket.length == 0;
  }