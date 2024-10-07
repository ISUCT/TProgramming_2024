function findMissingLetter(array){
  result = ''
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  if (array[0] === array[0].toUpperCase()){
    alphabet = alphabet.toUpperCase()
  }
  console.log(alphabet)
  for(let i = 0; i < (array.length-1);i++){
    sub = array[i] + array[i+1]
    console.log(sub)
    if (alphabet.indexOf(sub) == -1){
      console.log(array[i],array[i+1])
      result = alphabet[alphabet.indexOf(array[i+1])-1]
    }
  }
  return result;
}
