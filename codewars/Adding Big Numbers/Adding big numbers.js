function add(a, b) {
    let items = [a, b].sort((a,b)=> b-a);
    items[0] = items[0].split('').reverse().map(Number);
    items[1] = items[1].split('').reverse().map(Number);
    let ans = []
    let remains = 0;
    for (let i = 0; i <= items[1].length; i++){
        if ((items[0][i]+items[1][i] + remains >= 10) && (i == items[1].length-1)) {
            ans.push ((items[0][i]+items[1][i]+remains) % 10)
            if (items[0].length == items[1].length) {
                ans.push (remains)
            } else if (items[0][i+1] + remains >= 10) {
                ans.push((items[0][i+1] + remains) % 10);
                ans.push(~~(((items[0][i+1]+remains)/10)));
            } else {
                ans.push (items[0][i+1] + remains)
            } continue;
        }
        if (items[0][i]+items[1][i]+remains < 10) {
            ans.push(items[0][i]+items[1][i]+remains);
            remains = 0;
            continue;
        }
        if (items[0][i]+items[1][i]+remains >= 10) {
            ans.push((items[0][i]+items[1][i]+remains) % 10);
            remains = ~~((items[0][i]+items[1][i]+remains)/10);
            continue;
        }
    }
    if (items[0].length == items[1].length) {
        return (ans.reverse().join(''));
    } else {
        return (((items[0].slice(ans.length).reverse()).join('')) + ans.reverse().join(''))
    }
  }

console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
console.log("91002328220491911630239667963")