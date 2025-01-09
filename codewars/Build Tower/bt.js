function towerBuilder(nFloors) {
    let tower = [];
    let numberOfSigns = 1;
    for (let n = nFloors; n > 0; n--) {
      let numberOfSpaces = n - 1;
      let spaces = " ".repeat(numberOfSpaces);
      let signs = "*".repeat(numberOfSigns);
      tower.push(`${spaces}${signs}${spaces}`);
      numberOfSigns += 2;
    }
    return tower;
  }