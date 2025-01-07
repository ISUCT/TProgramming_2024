function SoDa(box) {
    let sum = 0;
    for (let i = 0; i < box.length; i++) {
        sum += Number(box[i]);
    }
    return(sum);
}


function digitalRoot(random_number) {
    let box = random_number.toString().split('');

    while (box.length != 1){
        let pre_result = SoDa(box);
        box = pre_result.toString().split('');
    }

  return Number(box);
}

let result = digitalRoot(492);
console.log(result);