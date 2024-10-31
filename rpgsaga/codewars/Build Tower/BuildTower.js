function towerBuilder(nFloors) {
    if (nFloors === 1) {
        return ['*'];
    }

    let tower = [];
    const lastFloor = concatenStr('*', nFloors);
    tower.push(lastFloor);
    let floor;
    if (nFloors > 0) {
        floor = lastFloor.replace(/^\*|\*$/g, " ");
        tower.unshift(floor);
    }
    for (let i = nFloors - 2; i > 0; i--) {
        floor = floor.replace(/\* /, "  ");
        floor = floor.replace(/ \*/, "  ");
        tower.unshift(floor);
    }
    return tower;
}

function concatenStr(str, num) {
    let sumStr = '';
    for (let i = 0; i < num * 2 - 1; i++) {
        sumStr += str;
    }
    return sumStr;
}
