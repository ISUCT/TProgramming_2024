export function solveCritChance(chance: number): number {
  const daDaNetNet: number = Math.floor(Math.random() * 101);
  if (chance > 0 && daDaNetNet <= chance) {
    return 2;
  } else {
    return 1;
  }
}
