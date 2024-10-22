function anagramDifference(w1,w2){
    let w3 = 0;
    for(let i = 0; i < w1.length; i++) {
        if(w2.includes(w1[i])){
            w2 = w2.replace(w1[i], 1);
            w3++;
        }
    }
return w1.length + w2.length - 2 * w3;
}
console.log(anagramDifference("codewars", "hackerrank"));