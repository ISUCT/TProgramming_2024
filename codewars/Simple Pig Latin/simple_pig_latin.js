function pigIt(str){
    let res = [];
  
    res = str.split(' ')
    for (i = 0; i < res.length; i++) {
      if (res[i] === '!' || res[i] === '?') {
        break
      }
      let resStr = res[i]
      let resArr = []
      resArr = resStr.split('')
      resArr.push(resArr.shift(),'ay')
      res[i] = resArr.join('')
    }
    return res.join(' ')
  }