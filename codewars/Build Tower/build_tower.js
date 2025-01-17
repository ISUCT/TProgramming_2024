function towerBuilder(nFloors) {
    let l = [];
    for (let i = 1; i <= nFloors; i++) {
        if (i === 1) {
            l.push(' '.repeat(nFloors - i) + '*' + ' '.repeat(nFloors - i));
        } else {
            let starsCount = l[l.length - 1].split('').filter(char => char === '*').length + 2;
            l.push(' '.repeat(nFloors - i) + '*'.repeat(starsCount) + ' '.repeat(nFloors - i));
        }
    }
    return l;
}