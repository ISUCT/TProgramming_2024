function moveZeros(arr) {

    let bom = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0){
            arr[bom] = arr[i];
            bom++;
        }
    }
    for (let i = bom; i < arr.length; i++){
        arr[i] = 0
    }
    return arr 
}
