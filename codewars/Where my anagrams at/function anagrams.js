function anagrams(word, words) {
    let res = [];
    let wordCount = new Array(128).fill(0);
    let countArr = new Array(words.length).fill(0);
  
    for(let i in countArr) {
      countArr[i] = new Array(128).fill(0);
    }
  
    for(let i in word) {
      wordCount[word.charCodeAt(i)]++;
    }
  
    for(let i in words) {
      for(let j in words[i]) {
        countArr[i][words[i].charCodeAt(j)]++;
  
        if(countArr[i][words[i].charCodeAt(j)] > wordCount[words[i].charCodeAt(j)]) {
          break;
        }
      }
    }
  
    for(let i = 0; i < countArr.length; i++) {
      let br = false;
      for(let j = 0; j < countArr[i].length; j++) {
        if(countArr[i][j] != wordCount[j]) {
          br = true;
          break;
        }
      }
  
      if(!br) {
        res.push(words[i]);
      }
    }
  
    return res;
  }