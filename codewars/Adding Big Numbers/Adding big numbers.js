function add(a, b) {
    let items = [a, b].sort((a, b) => b - a);
    items[0] = items[0].split('').map(Number);
    items[1] = items[1].split('').map(Number);
    let firstNumIdx = items[0].length - 1;
    let secondNumIdx = items[1].length - 1;
    let ans = []
    let remains = 0;
    while (firstNumIdx >= 0 || secondNumIdx >= 0 || remains > 0) {
        let num1 = firstNumIdx >= 0 ? parseInt(items[0][firstNumIdx], 10) : 0;
        let num2 = secondNumIdx >= 0 ? parseInt(items[1][secondNumIdx], 10) : 0;
        let sum = num1 + num2 + remains;
        if (sum >= 10 && secondNumIdx > 0) {
            ans.push((sum) % 10);
            remains = ~~((sum) / 10);
        } else if (sum < 10 && secondNumIdx > 0) {
            ans.push(sum);
            remains = 0;
        } else if (sum >= 10 && secondNumIdx <= 0) {
            ans.push((sum) % 10);
            remains = ~~((sum) / 10);
        } else if (sum < 10 && secondNumIdx <= 0) {
            ans.push(sum);
            remains = 0;
        }
        firstNumIdx--;
        secondNumIdx--;
    }
    return ans.reverse().join('');
}
