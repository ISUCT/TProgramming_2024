function validParentheses(parens) {
    let stack = [];
  
    for(let i = 0; i < parens.length; i++) {
      let par = stack.pop();
      if(parens[i] == ")" && par == "(") {
        continue;
      }
  
      if(par != undefined) {
        stack.push(par);
      }
  
      stack.push(parens[i]);
    }
  
    if(stack.length != 0) {
      return false;
    }
  
    return true;
  }