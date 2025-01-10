export function getRandomNumber(min: number, max: number): number {
  if (min > max) {
    return -1;
  }
  if (min === max) {
    return min;
  }

  const range: number = max - min + 1;
  const randomNumber: number = Math.floor(Math.random() * range) + min;

  return randomNumber;
}

export function getRandomArrayElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  const randomIndex: number = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
