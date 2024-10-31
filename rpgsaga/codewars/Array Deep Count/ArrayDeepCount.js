function deepCount(a) {
    let answer = a.length;

    for (let i of a) {
        if (Array.isArray(i)) {
            answer += deepCount(i);
        }
    }
    return answer;
}
