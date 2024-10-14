function isAlpha(word) {
  for (let i = 0; i < word.length; i++) {
    let charCode = word.charCodeAt(i);
    if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
      return false; 
    }
  }
  return true; 
}


function pigIt(str){
  
  let words = str.split(' ');
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

   
    if (isAlpha(word)) {
      result.push(word.slice(1) + word[0] + 'ay');
    } else {
      result.push(word);
    }
  }

  return result.join(' ');
}