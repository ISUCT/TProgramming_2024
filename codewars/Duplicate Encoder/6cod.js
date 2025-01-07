function duplicEncode(word){
    let splitword = word.toLowerCase().split('');

    let convertext = [];

    for (let i = 0; i < splitword.length; i++) {
        let count = 0;
        for (let j = 0; j < splitword.length; j++){
            if (splitword[i] === splitword[j]){
                count++;
            }
        }
        if (count > 1) {
            convertext.push(")");
        } else {
            convertext.push("(");
        }
    }

    return convertext.join('');
}

let result = duplicEncode("dir");
console.log(result);