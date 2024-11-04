function againAndagain(word){
    if (Array.isArray(word)) {
        console.log("yes");
        let count = deepCount(word);
        return count + 1;
    }
    else {
        console.log("no");
        return(1);
    }
}


function deepCount(is_here_anyobj){
    let Global_count = 0;
    for (let i = 0; i < is_here_anyobj.length; i++){
        let pre_res = againAndagain(is_here_anyobj[i]);
        Global_count += pre_res;
    }
    return(Global_count);
  }
let arr = [1, 2, 3];
let result = deepCount(arr);
console.log(result);