function validParentheses(parens) {
    let newpar = parens.split("");
    let count_turn_left = 0; 
    let count_turn_right = 0; 
    for (let i = 0; i < newpar.length; i++){
        if (newpar[i] === "("){
            count_turn_left++;
        }
        else {
            count_turn_right++;
        }
    }
    if (count_turn_left === count_turn_right ){
        return true;
    }
    else{
        return false;
    }
  }

let result = validParentheses("()");
console.log(result);
