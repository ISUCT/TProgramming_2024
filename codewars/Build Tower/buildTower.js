function towerBuilder(nFloors) {
  const pyramid = [];
  for (let i = 1; i <= nFloors; i++) {
    const spaces = ' '.repeat(nFloors - i);
    const stars = '*'.repeat(2 * i - 1); 
    pyramid.push(spaces + stars + spaces);
  }
  return pyramid;
}
const numberOfFloors = 5;
const pyramidArray = towerBuilder(numberOfFloors);
console.log(pyramidArray.join('\n'));