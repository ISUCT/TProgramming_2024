export function duplicateEncode(word: string): string {
    let a: string = "";
    word = word.toLowerCase();
    for (let i of word) {
        if (word.split(i).length>2) {
            a += ")"
        } else {
            a += "("
        }
    }
    return a;
}