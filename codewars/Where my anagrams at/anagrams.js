function anagrams(word, words) {
  
  let checkout = word.split('').sort().join('');
  let result = [];
  
  for (let i = 0; i < words.length; i++){
    if(words[i].split("").sort().join("") == checkout) {
      result.push(words[i]);
    }
    
  }
  return result;
}