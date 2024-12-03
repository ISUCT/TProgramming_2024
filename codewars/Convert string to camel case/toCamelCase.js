function toCamelCase(str) {
    if (str === "") return str;
  
    const words = str.split(/[-_]/);
    return words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
  }