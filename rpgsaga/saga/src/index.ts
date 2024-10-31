function fun(x: number, a: number, b: number): number | string{
    if (x*x - 1 <=0) {
        return 'Значение под логарифмом должно быть >0';}
    if (a*x*x - b <=0) {
        return 'Значение под логарифмом должно быть >0';}
    const topfun = Math.log10(x*x - 1);
    const bottomfun = Math.log(a*x*x - b) / Math.log(5);
    return topfun/bottomfun
    }
console.log('Задание A')
function funA(a: number, b: number,xnach: number,xkonech: number,shag: number): Array<number> | string {
    let otvet = []
    if (shag === 0) {
        return []
    }
    if (shag > 0) {
        for (let i = xnach; i <= xkonech; i+=shag) {
            otvet.push(fun(i,a,b));
        }
    }   else {
        for (let i = xnach; i >= xkonech; i+=shag) {
            if ((i*i - 1) <= 0) {
                continue;
            }
            if ((a*i*i - b) <= 0) {
                continue;
            }
            otvet.push(fun(i,a,b));
    }
    }
    return otvet;
  }
//задание b
function funB(a: number, b: number,xValues: Array<number>): Array<number> | string {
    let otvet = [];
    for (let i = 0; i<xValues.length; i++) {
        const x = xValues[i];
        otvet.push(fun(x,a,b));
    }
    return otvet;
}
console.log(funA(1.1,0.09,1.2,2.2,0.2));
console.log(funB(1.1,0.09,[1.21,1.76,2.53,3.48,4.52]));
console.log(funA(1.1,0.09,2.2,1.2,-0.2));
console.log(funA(0.5,1,1.5,-3.5,-1));
export {funA, funB};