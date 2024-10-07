function digitalRoot(n) {
  str = String(n).split('')
  while(true){
    summ = 0
    for (let i = 0; i < str.length;i++){
      summ+= Number(str[i])
    }
    if (str.length == 1){
      break
    }
    str = String(summ).split('')
  }
  return Number(str[0])
}
