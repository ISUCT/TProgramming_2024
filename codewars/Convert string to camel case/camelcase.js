function toCamelCase(str) {
    if (str.length === 0) {
      return str;
    }
    const arr = str.split(/[-_]/);
  
    const newArr = arr.map((word, index) => {
      if (index === 0) {
        return word[0] + word.substr(1).toLowerCase();
      } else {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
      }
    });
    return newArr.join("");
  } 