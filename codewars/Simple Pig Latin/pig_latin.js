function pigIt(str){
    let result = [];

    result = str.split(' ');
    for (i = 0; i < result.length; i++) {
      if (result[i] === '!' || result[i] === '?') {
        break;
      }
      let resultStr = result[i];
      let resultArr = [];
      resultArr = resultStr.split('');
      resultArr.push(resultArr.shift(),'ay');
      result[i] = resultArr.join('');
    }
    return result.join(' ');
  }