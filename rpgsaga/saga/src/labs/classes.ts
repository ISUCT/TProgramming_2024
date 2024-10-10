const nowDate = new Date();

export class Film {
  name: string;
  director: string;
  year: number;
  country: string;
  genre: string;
  ageLimit: number;
  filmLengthInMinutes: number;
  constructor(
    name: string,
    director: string,
    year: number,
    country: string = '<unknown country>',
    genre: string,
    ageLimit: number = 0,
    filmLengthInMinutes: number,
  ) {
    this.name = name;
    this.director = director;
    if (year < 1895) {
      throw new Error('Incorrect year');
    } else {
      this.year = year;
    }
    this.country = country;
    this.genre = genre;
    if ([0, 6, 12, 16, 18].includes(ageLimit)) {
      this.ageLimit = ageLimit;
    } else {
      throw new Error('Wrong age limit');
    }
    if (filmLengthInMinutes <= 0 && filmLengthInMinutes > 1000) {
      throw new Error(`Incorrect film's length`);
    } else {
      this.filmLengthInMinutes = filmLengthInMinutes;
    }
  }
  filmInfo(): string {
    const strToReturn = `Film "${this.name}" was shot by ${this.director} in ${this.country} in ${this.year}. Genre of this film is ${this.genre}. This film is ${this.ageLimit}+.`;
    return `┏${'—'.repeat(strToReturn.length)}┓\n|${strToReturn}|\n┗${'—'.repeat(strToReturn.length)}┛`;
  }

  public get len(): number {
    return this.filmLengthInMinutes;
  }

  public set ageLim(age: number) {
    if ([0, 6, 12, 16, 18].includes(age)) {
      this.ageLimit = age;
    } else {
      throw new Error('Wrong age limit');
    }
  }

  playFilm(): void {
    console.log(`=================== Film "${this.name}" started. ===================`);
    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    // delay time less then need (1 minute = 100ms) for easier checking
    delay(Number(this.len) * 100).then(() => {
      console.log(`=================== Film "${this.name}" ended. ===================`);
    });
  }

  howOldFilmIs(): string {
    const old: number = nowDate.getFullYear() - Number(this.year);
    return `=================== Film "${this.name}" was released ${old} years ago. ===================`;
  }
}
