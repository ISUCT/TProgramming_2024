function findMissingLetter(array)
{
  let FirstCharacterCode = array[0].charCodeAt(0);
  
  for (let i = 0; i < array.length; i++){

    let ExpectedCharacterCode = FirstCharacterCode + i;
    
    if (ExpectedCharacterCode != array[i].charCodeAt(0)) {
      
      return String.fromCharCode(ExpectedCharacterCode);
    }
  }
  
  return ' ';
}