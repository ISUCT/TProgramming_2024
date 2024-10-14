function duplicateEncode(word){
  
  word = word.toLowerCase();
  
  return word
    .split('') // Превращаем строку в массив символов
    .map(function(char) {
    // Если символ встречается один раз, добавляем '(', иначе ')'
    if (word.indexOf(char) === word.lastIndexOf(char)) char = '('
    else char = ')';
      return char;
    })
    .join(''); 
  
}