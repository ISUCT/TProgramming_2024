function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
      const icode = array[i].charCodeAt(0);
      const inextcode = array[i + 1].charCodeAt(0);
      if (inextcode !== icode + 1) {
        return String.fromCharCode(icode + 1);
      }
    }
  } 