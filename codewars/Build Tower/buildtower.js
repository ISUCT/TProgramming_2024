function towerBuilder(numOfFloors) {
    const tower = [];
    for (let floor = 0; floor < numOfFloors; floor++) {
      const numOfStars = 2 * floor + 1;
      const numOfSpaces = numOfFloors - floor - 1;
      const stars = '*'.repeat(numOfStars);
      const spaces = ' '.repeat(numOfSpaces);
      const floorString = spaces + stars + spaces;
      tower.push(floorString);
    }
    return tower;
  }