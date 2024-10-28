export function getRandomNumber(min: number, max: number): number {
  if (min > max) {
    throw new Error('Minimum value cannot be greater than maximum value.');
  }
  if (min === max) {
    return min;
  }

  const range = max - min + 1;
  const randomNumber = Math.floor(Math.random() * range) + min;

  return randomNumber;
}
