function towerBuilder(nFloors) {
    const tower = [];
    for (let i = 0; i < nFloors; i++) {
      const stars = '*'.repeat(2 * i + 1);
      const spaces = ' '.repeat(nFloors - i - 1);
      tower.push(spaces + stars + spaces);
    }
    return tower;
  }