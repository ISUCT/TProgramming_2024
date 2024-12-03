export function towerBuilder(floors: number): string[] {
    const tower: string[] = [];
    for (let i = 0; i < floors; i++) {
        const stars = '*'.repeat(2 * i + 1);
        const spaces = ' '.repeat(floors - i - 1);
        tower.push(spaces + stars + spaces);
    }
    return tower;
}