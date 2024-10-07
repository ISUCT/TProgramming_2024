function duplicateEncode(word){
  word = word.toLowerCase()
  result = ''
  for (let i =0; i < word.length;i++){
    letter = word[i]
    count = 0
    for (let j = 0; j < word.length; j++){
      if(letter == word[j]){
        count = count + 1
      }
    }
    if (count == 1){
      result = result + '('
    }
    else{
      result = result + ')'
    }
    }
    
  return result;
}
