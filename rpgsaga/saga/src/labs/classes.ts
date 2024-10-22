export class Film {
  private _name: string;
  private _director: string;
  private _year: number;
  private _country: string;
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
    this._name = name;
    this._director = director;
    this.year = year;
    this._country = country;
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

  private set year(value: number) {
    if (value < 1895) {
      throw new Error('Incorrect year');
    } else {
      this._year = value;
    }
  }

  public set ageLimit(age: number) {
    if ([0, 6, 12, 16, 18].includes(age)) {
      this._ageLimit = age;
    } else {
      throw new Error('Wrong age limit');
    }
  }

  public get name(): string {
    return this._name;
  }

  public get director(): string {
    return this._director;
  }

  public get year(): number {
    return this._year;
  }

  public get country(): string {
    return this._country;
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

  playFilm(): void {
    console.log(`=================== Film "${this._name}" started. ===================`);
    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    // delay time less then need (1 minute = 100ms) for easier checking
    delay(Number(this.filmLengthInMinutes) * 100).then(() => {
      console.log(`=================== Film "${this._name}" ended. ===================`);
    });
  }

  howOldFilmIs(): string {
    const old: number = new Date().getFullYear() - Number(this._year);
    return `=================== Film "${this._name}" was released ${old} years ago. ===================`;
  }

  filmInfo(): string {
    const strToReturn = `Film "${this._name}" was shot by ${this._director} in ${this._country} in ${this._year}. Genre of this film is ${this._genre}. This film is ${this._ageLimit}+.`;
    return `┏${'—'.repeat(strToReturn.length)}┓\n|${strToReturn}|\n┗${'—'.repeat(strToReturn.length)}┛`;
  }
}
