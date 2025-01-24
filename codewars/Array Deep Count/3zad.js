function adc(word){
    if (Array.isArray(word)) {
        console.log("yes");
        let count = Count(word);
        return count + 1;
    }
    else {
        console.log("no");
        return(1);
    }
}


function Count(is_here_anyobj){
    let Global_count = 0;
    for (let i = 0; i < is_here_anyobj.length; i++){
        let pre_res = adc(is_here_anyobj[i]);
        Global_count += pre_res;
    }
    return(Global_count);
  }
let arr = [1, 2, 3];
let result = Count(arr);
console.log(result);