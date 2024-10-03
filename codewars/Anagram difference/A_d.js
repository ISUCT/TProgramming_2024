function show_me_repeat(word, wb2) {
    for (let j = 0; j < wb2.length; j++) {
        if (word === wb2[j]) {
            wb2.splice(j, 1);
            return word;
        }
    }
    return null;
}

function anagramDifference(w1, w2) {
    let wb1 = w1.split("");
    let wb2 = w2.split("");
    let box_of_repeat = [];
    
    for (let i = 0; i < wb1.length; i++) {
        let res_word = show_me_repeat(wb1[i], wb2);
        if (res_word !== null) {
            box_of_repeat.push(res_word);
            wb1.splice(i, 1); 
            i--; 
        }
    }
    
    let final_result = (wb1.length + wb2.length);
    return final_result;
}

let result = anagramDifference("codewars", "hackerrank");
console.log(result);