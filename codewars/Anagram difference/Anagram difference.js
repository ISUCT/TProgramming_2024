function anagramDifference(w1, w2) {
    let anList = {};
    let ans = 0;
    for (let i = 0; i < w1.length; i++) {
        anList[w1[i]] = (anList[w1[i]] || 0) + 1;
    }
    for (let i = 0; i < w2.length; i++) {
        anList[w2[i]] = (anList[w2[i]] || 0) - 1;
    }
    for (let delSign in anList) {
        ans += Math.abs(anList[delSign]);
    }
    return ans;
}

console.log(anagramDifference("codewars", "hackerrank"))
