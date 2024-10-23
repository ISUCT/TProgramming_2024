function toCamelCase(str) {
    if (str == "") {
      return str;
    }
    const words = str.split(/[-_]/);
  
    const upperCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word.charAt(0) + word.slice(1).toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
  
    return upperCaseWords.join("");
  }