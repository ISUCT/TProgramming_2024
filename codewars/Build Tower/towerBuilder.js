function towerBuilder(nFloors) {
  lastFloorLen = nFloors*2 - 1
  result = []
  for (let i = 1; i < nFloors+1; i++){
    floor = '*'.repeat(i*2-1)
    floor = floor.padStart(floor.length + (lastFloorLen - floor.length)/2)
    floor = floor.padEnd(floor.length + (lastFloorLen - floor.length))
    result.push(floor)
  }
  return result
}
