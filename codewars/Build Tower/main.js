function towerBuilder(nFloors) {
    const tower = [];
    for (let i = 1; i <= nFloors; i++) {
        const spaces = " ".repeat(nFloors - i);
        const stars = "*".repeat(i * 2 - 1);
        tower.push(spaces + stars + spaces);
    }
    return tower;
}
