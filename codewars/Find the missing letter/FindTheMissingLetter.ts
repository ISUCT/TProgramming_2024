export function findMissingLetter(array: string[]): string | void {
    for (let i in array) {
        if (array[i].charCodeAt(0)+1 !== array[Number(i)+1].charCodeAt(0)) {
            return String.fromCharCode(array[i].charCodeAt(0)+1)
        }
    }
}