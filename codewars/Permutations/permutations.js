function permutations(string) {
  
	function generatePermutations(chars) {
    
    if (chars.length === 1) return [chars];

    let result = [];
    
    for (let i = 0; i < chars.length; i++) {
      
      let currentChar = chars[i];
      
      let remainingChars = chars.slice(0, i).concat(chars.slice(i + 1));
      
      let remainingPermutations = generatePermutations(remainingChars);
      
      for (let permutation of remainingPermutations) {
        result.push([currentChar].concat(permutation));
      }
    }
    
    return result;
  }

  let charsArray = string.split('');

  let allPermutations = generatePermutations(charsArray);


  let permutationsAsStrings = [];
  
  for (let arr of allPermutations) {
    let str = '';
    for (let char of arr) {
      str += char;
  }
    permutationsAsStrings.push(str);
  }

  let uniquePermutations = [...new Set(permutationsAsStrings)];

  return uniquePermutations;
}