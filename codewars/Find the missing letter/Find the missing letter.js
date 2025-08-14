function findMissingLetter(array) {
    2
      let startLetter = array[0].charCodeAt(0);
    3
      let missingLetter = "";
    4
    ​
    5
      for (let i = 1; i < array.length; i++) {
    6
        let currentLetter = array[i].charCodeAt(0);
    7
        if (currentLetter - startLetter !== i) {
    8
          missingLetter = String.fromCharCode(startLetter + i);
    9
          break;
    10
        }
    11
      }
    12
    ​
    13
      return missingLetter;
    14
    }