function mergeArrays(a, b) {
    console.log(a, b); 
    console.log(a.length, b.length);
    let i = 0;
    let answer = [];
    while (i < a.length && i < b.length) {
      answer.push(a[i]);
      answer.push(b[i]);
      i++;
    }
    while (i < a.length) {
      answer.push(a[i]);
      i++;
    }
    while (i < b.length) {
      answer.push(b[i])
      i++;
    }
    console.log(answer);
    return answer;
  }