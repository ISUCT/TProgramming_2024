function toCamelCase(str){

  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    
    if (str[i] == '-' || str[i] == '_') {
            
      if (i + 1 < str.length) { // Проверяем, есть ли следующий символ
        result += str[i + 1].toUpperCase();
        i++; // Пропускаем следующий символ, т.к. он уже добавлен
      }
 
    } else result += str[i];

    }
  return result;
}