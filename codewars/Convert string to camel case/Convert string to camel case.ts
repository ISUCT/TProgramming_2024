export function toCamelCase(str:string):string {
  let strArr = str.split('');
  for(let i = strArr.length; i >= 0; i--) {
    if(strArr[i] == "_" || strArr[i] == "-") {
      let letter = strArr[i + 1].toUpperCase();
      strArr.splice(i, 2, letter);
    }
  }
  return strArr.join("");
}