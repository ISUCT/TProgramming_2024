export const pigIt = (a : string) : string =>  {
  a += " ";
  
  let curLetter: string = "";
  let curIndex: number = -1;
  for(let i = 0; i < a.length; i++) {
    if(a[i] != " " && curLetter == "" && !a[i].match(/[.,:!?]/)) {
      curLetter = a[i];
      curIndex = i;
      continue;
    }
    
    if(a[i] == " " && curLetter != "") {
      a = a.slice(0, curIndex) + a.slice(curIndex + 1, i) + curLetter + "ay" + a.slice(i);
      curLetter = "";
      i += 2;
    }
  }
  
  a = a.slice(0, a.length - 1);
  
  return a;
}