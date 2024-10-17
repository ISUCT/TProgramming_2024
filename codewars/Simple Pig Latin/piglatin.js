function pigIt(str) {
    str = str.split(" ");
    let lastLetters = "ay";
    let result = [];
  
    for (let word of str) {
      if (word === "!" || word === "?") {
        result.push(word);
        break;
      }
  
      word = word.split("");
      let firstLetter = word.splice(0, 1)[0];
      word.push(firstLetter, lastLetters);
      let resultWord = "";
  
      for (let char of word) {
        resultWord += char;
      }
      result.push(resultWord);
    }
  
    let resStr = "";
    result.forEach((str) => {
    resStr += `${str} ` ;
    });
  
    return resStr.trimEnd();
  }