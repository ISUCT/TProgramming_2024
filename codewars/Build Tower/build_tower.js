function towerBuilder(nFloors) {
    let voids = []
    let bricks = []
    let tower = []
    for (i = 1; i <= nFloors; i++) {
        voids = ' '.repeat(nFloors - i)
        bricks = '*'.repeat((2*i) - 1)
        tower.push(`${voids}${bricks}${voids}`)
    }
    return tower;
  }