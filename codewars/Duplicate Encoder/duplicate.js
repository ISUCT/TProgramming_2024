function duplicateEncode(word) {
    const counting = {};
    let stroke = "";
  
    for (let i = 0; i < word.length; i++) {
      const element = word[i].toLowerCase();
      counting[element] = (counting[element] || 0) + 1;
    }
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i].toLowerCase();
      if (counting[char] > 1) {
        stroke += ")";
      } else {
        stroke += "(";
      }
    }
    return stroke;
  }
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @" ));
