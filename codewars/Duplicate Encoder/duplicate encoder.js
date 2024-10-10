function duplicateEncode(word){
  let listWord = word.toLowerCase().split('');
  let counted = {};
  listWord.forEach(function(letter){
    counted[letter] = (counted[letter] || 0) + 1;
  });
  return listWord.map(function(letter){
    return counted[letter] == 1 ? "(" : ")";
  }).join('');
}