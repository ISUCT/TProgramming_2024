function validParentheses(parens) {
    let stack = [];
  
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
        stack.push(parens[i]);
      } else if (parens[i] === ')') {
        if (stack.length === 0 || stack.pop() !== '(') {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }