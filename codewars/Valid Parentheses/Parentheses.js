function validParentheses(parens) {
    let balance = 0;

    for (let char of parens) {
      if (char === "(") {
        balance++;
      } else if (char === ")") {
        balance--;
        if (balance < 0) {
          return false; 
        }
      }
    }

    return balance === 0; 
  }
