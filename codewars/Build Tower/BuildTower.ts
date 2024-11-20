export const towerBuilder = (nFloors: number): string[] => {
    let a: string[] = [];
    for (let i: number = 0; i < nFloors; i++) {
        let b: string = ' '.repeat(nFloors-i-1);
        let c: string = '*'.repeat(2*i+1);
        a.push(b+c+b);
    }
    return a;
}