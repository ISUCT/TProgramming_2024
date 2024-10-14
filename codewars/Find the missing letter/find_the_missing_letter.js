function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
      const currChar = array[i].charCodeAt(0);
      const nextChar = array[i + 1].charCodeAt(0);
  
      if (nextChar !== currChar + 1) {
        return String.fromCharCode(currChar + 1);
      }
    }
  }