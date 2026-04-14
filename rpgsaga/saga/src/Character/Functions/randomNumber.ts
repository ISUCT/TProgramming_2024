export function randomNumber(min: number, max: number): number {
    if (min > max) {
      return -1;
    }
    if (min === max) {
      return min;
    }
  
    const rndNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return rndNumber;
  }
