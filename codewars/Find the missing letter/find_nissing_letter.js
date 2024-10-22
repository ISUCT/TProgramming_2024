function findMissingLetter(array)
{
  let first = array[0].charCodeAt(0);
   for (let i = 0; i < array.length; i++) {
        if (array[i].charCodeAt(0) !== first + i) {
            return String.fromCharCode(first + i);
          }
     }
  return null
}
console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));