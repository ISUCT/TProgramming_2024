export function toCamelCase(input: string): string {
    if (input === "") return input;
    const words = input.split(/[-_]/);
    const transformedWords = words.map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return transformedWords.join("");
}