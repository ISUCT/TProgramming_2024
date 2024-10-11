function findMissingLetter(array) {
    var string = array.join("");
    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
        return String.fromCharCode(string.charCodeAt(i) + 1);
      }
    }
  }