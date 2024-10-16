function permutations(str) {
  let res = [];
  
  if(str.length > 2) {
    let temp = permutations(str.slice(0, str.length - 1));
    for(let i = 0; i < temp.length; i++) {
      for(let j = 0; j < temp[i].length + 1; j++) {
        let strToPush = temp[i].slice(0, j) + str[str.length - 1] + temp[i].slice(j, temp[i].length);
        if(!res.includes(strToPush)) {
          res.push(strToPush);
        }
      }
    }
    return res;
  }
  
  res.push(str);
  if(str.length > 1 && str[0] != str[1]) {
    res.push(str.split("").reverse().join(""));
  }
  return res;
}