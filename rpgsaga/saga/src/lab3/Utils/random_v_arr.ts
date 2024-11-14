export function random_value_array<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined; // Если массив пустой, возвращаем undefined
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}