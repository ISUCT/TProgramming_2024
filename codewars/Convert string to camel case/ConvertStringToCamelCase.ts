export function toCamelCase(str: string): string {
    let a: string[] = str.split(/[_-]/);
    for (let i: number = 1; i<a.length; i++) {
        a[i] = a[i][0].toUpperCase() + a[i].slice(1);
    }
    return a.join('');
}