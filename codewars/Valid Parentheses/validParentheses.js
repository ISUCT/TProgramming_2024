function validParentheses(parens) {
  let stack = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push("(");
    } else if (parens[i] === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}
