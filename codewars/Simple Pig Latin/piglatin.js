function pigIt(str) {
    str = str.split(" ");
    let ayLetters = "ay";
    let result = [];
  
    for (let word of str) {
      if (word === "!" || word === "?") {
        result.push(word);
        break;
      }
      word = word.split("");
      let firstLetter = word.splice(0, 1)[0];
      word.push(firstLetter, ayLetters);
      let pigIt = "";
      for (let char of word) {
        pigIt += char;
      }
      result.push(pigIt);
    }
    let newStr = result.join(" ");
    return newStr.trimEnd();
  } 