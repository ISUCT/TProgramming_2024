function toCamelCase(str) {
    if (str == "") {
      return str;
    }
    const words = str.split(/[-_]/);
  
    const upperCaseWords = words.map((word, index) => {
      return index === 0
        ? word.charAt(0) + word.slice(1).toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    return upperCaseWords.join("");
  }