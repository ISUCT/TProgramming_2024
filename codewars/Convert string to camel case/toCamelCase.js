function toCamelCase(str){
  result_str = ''
  str_arr = str.split('_')
  new_str = ''
  for (let i = 0; i < str_arr.length;i++){
    fisrt_symbol = str_arr[i].slice(0,1)
    new_str = new_str + fisrt_symbol.toUpperCase() + str_arr[i].slice(1)
  }
  new_str = new_str.split('-')
  for (let i = 0; i < new_str.length;i++){
    fisrt_symbol = new_str[i].slice(0,1)
    result_str = result_str + fisrt_symbol.toUpperCase() + new_str[i].slice(1)
  }
  result_str = str.slice(0,1) + result_str.slice(1)
  return result_str
}
