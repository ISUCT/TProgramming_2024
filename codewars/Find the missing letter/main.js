function findMissingLetter(array) {

    const n = array[0].charCodeAt(0);
    for(var i = 0; i < array.length; i++) {
        if(array[i].charCodeAt(0) !== n + i) {
            return String.fromCharCode(n + i);  
        }
    }
  return ' ';
}
