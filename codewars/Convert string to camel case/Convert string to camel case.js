function toCamelCase(str) {
    if (!str) {
      return "";
    }
  
    const words = str.split(/[-_]/);
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word; 
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    });
  
    return camelCaseWords.join("");
  }