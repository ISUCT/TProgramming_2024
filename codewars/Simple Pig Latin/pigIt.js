function pigIt(str){
  str = str.split(" ")
  let alf = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('')
  console.log(str)
  for (let i = 0; i < str.length;i++){
    if (alf.indexOf(str[i]) != -1 || str[i].length > 1){
    str[i] = str[i].slice(1) + str[i][0] + 'ay'
  }}
  str = str.join(" ")
  return str
}

