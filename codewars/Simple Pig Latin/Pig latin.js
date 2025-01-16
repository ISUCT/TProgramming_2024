function pigIt(str){
    let splitedStr = str.split(' ');
    let checkingRule = /[^\w\s]/;
    let checking = checkingRule.exec(str);
    for (let i = 0; i < splitedStr.length; i++) {
        if (!checkingRule.test(splitedStr[i])){
            let word = splitedStr[i].split('');
            word.push(word.shift());
            word.push("a", "y");
            splitedStr[i] = word.join('');
        } else {
            checking = checkingRule.exec(str);
        }
    }
    return splitedStr.join(' ')
  }
  