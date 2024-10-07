function mergeArrays(a, b) {
  first_array = a;
  second_array = b;
  result_array = [];
  if(first_array.length > second_array.length){
    array_len = first_array.length
  }
  else{
    array_len = second_array.length
  }
  for (let i =0; i < array_len;i = i + 1){
    if(first_array[i] != undefined){
      result_array.push(first_array[i])
    }
    if(second_array[i] != undefined){
      result_array.push(second_array[i])
    }
  }
  return result_array
}
