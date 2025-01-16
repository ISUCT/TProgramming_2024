import { WorkOfArt } from './workOfArt';

export class Film extends WorkOfArt {
  private _genre: string;
  private _ageLimit: number;
  private _filmLengthInMinutes: number;
  constructor(
    name: string,
    director: string,
    year: number,
    country: string = '<unknown country>',
    genre: string,
    ageLimit: number = 0,
    filmLengthInMinutes: number,
  ) {
    super(name, year, director, country);
    this._genre = genre;
    this._ageLimit = ageLimit;
    this.filmLengthInMinutes = filmLengthInMinutes;
  }

  private set filmLengthInMinutes(value: number) {
    if (value <= 0 || value > 1000) {
      throw new Error(`Incorrect film's length`);
    } else {
      this._filmLengthInMinutes = value;
    }
  }

  public set ageLimit(age: number) {
    if ([0, 6, 12, 16, 18].includes(age)) {
      this._ageLimit = age;
    } else {
      throw new Error('Wrong age limit');
    }
  }

  public get genre(): string {
    return this._genre;
  }

  public get ageLimit(): number {
    return this._ageLimit;
  }

  public get filmLengthInMinutes(): number {
    return this._filmLengthInMinutes;
  }

  public display(): void {
    console.log(`=================== Film "${this.name}" started. ===================`);
    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    // delay time less then need (1 minute = 100ms) for easier checking
    delay(Number(this.filmLengthInMinutes) * 100).then(() => {
      console.log(`=================== Film "${this.name}" ended. ===================`);
    });
  }

  public howOldFilmIs(): string {
    const old: number = new Date().getFullYear() - Number(this.year);
    return `=================== Film "${this.name}" was released ${old} years ago. ===================`;
  }

  public filmInfo(): string {
    const strToReturn = `Film "${this.name}" was shot by ${this.director} in ${this.country} in ${this.year}. Genre of this film is ${this._genre}. This film is ${this._ageLimit}+.`;
    return `┏${'—'.repeat(strToReturn.length)}┓\n|${strToReturn}|\n┗${'—'.repeat(strToReturn.length)}┛`;
  }
}
