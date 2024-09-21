export function findMissingLetter(array:string[]):string
{
  let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  
  if(array[0] == array[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase();
  }
  
  let index: number = alphabet.indexOf(array[0]);
  for(let i = 0; i < array.length; i++) {
    if(array[i] != alphabet[index + i]) {
      return alphabet[index + i];
    }
  }
  return "";
}