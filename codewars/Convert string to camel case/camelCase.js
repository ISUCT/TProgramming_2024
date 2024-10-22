function toCamelCase1(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '_' || str[i] === '-') {
        i++;
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
    return result;
  }
  console.log(toCamelCase1("the-stealth-warrior"));