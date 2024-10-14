function validParentheses(parens) {
  
  let a = 0;
  
  for (let i = 0; i < parens.length; i++){
    
    if (parens[i] =='(') a++;
    if (parens[i] == ')') a--;
    if (a < 0) return false;
  }
  
  return (a == 0);
}