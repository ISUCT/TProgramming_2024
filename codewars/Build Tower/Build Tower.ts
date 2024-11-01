export const towerBuilder = (nFloors: number): string[] => {
  let maxFloorLen: number = 1 + 2 * (nFloors - 1);
  let tower: string[] = [];
  for(let i = 0; i < nFloors; i++) {
    let floor: string = '*'.repeat(1 + 2 * i);
    let padLen: number = (maxFloorLen - floor.length) / 2;
    floor = floor.padStart(maxFloorLen - padLen, ' ');
    floor = floor.padEnd(maxFloorLen, ' ');
    tower.push(floor);
  }
  return tower;
}