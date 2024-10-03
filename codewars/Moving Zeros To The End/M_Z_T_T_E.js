function moveZeros(arr) {
    let arwz = [];
    let arrzero = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            arrzero.push(arr[i]);
        }
        else{
            arwz.push(arr[i]);
        }
    }
    return arwz.concat(arrzero);
}


result = moveZeros([false,1,0,1,2,0,1,3,"a"]);
console.log(result);
