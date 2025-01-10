function towerBuilder(nFloors) {
    let currentbl = [];
    for (let i = 1; i <= nFloors; i++) {
        if (i === 1) {
            currentbl.push(' '.repeat(nFloors - i) + '*' + ' '.repeat(nFloors - i));
        } else {
            let counter = currentbl[currentbl.length - 1].split('').filter(char => char === '*').length + 2;
            currentbl.push(' '.repeat(nFloors - i) + '*'.repeat(counter) + ' '.repeat(nFloors - i));
        }
    }
    return currentbl;
}