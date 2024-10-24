function pigIt(str) {
    str = str.split(" ");
    let lastLetters = "ay";
    let result = [];
  
    for (let word of str) {
      if (word === "!" || word === "?") {
        result.push(word);
      } else {
        word = word.split("");
        let firstLetter = word.splice(0, 1)[0];
        word.push(firstLetter, lastLetters);
        result.push(word.join(""));
      }
    }
  
    return result.join(" ");
  }