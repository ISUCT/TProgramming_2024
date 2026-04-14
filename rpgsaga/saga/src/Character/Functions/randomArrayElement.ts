export function randomArrayElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
      return undefined;
    }
    const i: number = Math.floor(Math.random() * arr.length);
    return arr[i];
  }
  