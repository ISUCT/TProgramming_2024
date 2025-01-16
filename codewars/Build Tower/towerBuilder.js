function towerBuilder(nFloors) {
  let ansList = [];
  let voids = [];
  let stars = [];
  for (let i = 1; i <= nFloors; i++) {
    voids = ' '.repeat(nFloors - i);
    stars = '*'.repeat((i*2) - 1);
    ansList.push(`${voids}${stars}${voids}`)

  }
  return ansList
}
