function add(num1, num2) {
    let sum = "";
    let k = 0;
    while (num1.length < num2.length) num1 = "0" + num1;
    while (num2.length < num1.length) num2 = "0" + num2;
    for (let i = num1.length - 1; i >= 0; i--) {
        let digitSum = +num1[i] + +num2[i] + k;
        sum = (digitSum % 10) + sum;
        k = Math.floor(digitSum / 10);}
    if (k) sum = k + sum;
    return sum;
}