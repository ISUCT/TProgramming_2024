// var 22

const nowDate = new Date();

class Film {
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
    this.year = year;
    this.country = country;
    this.genre = genre;
    this.ageLimit = ageLimit;
    this.filmLengthInMinutes = filmLengthInMinutes;
  }
  filmInfo(): string {
    const strToReturn = `Film "${this.name}" was shot by ${this.director} in ${this.country} in ${this.year}. Genre of this film is ${this.genre}. This film is ${this.ageLimit}+.`;
    return `┏${'—'.repeat(strToReturn.length)}┓\n|${strToReturn}|\n┗${'—'.repeat(strToReturn.length)}┛`;
  }

  public get len(): number {
    return this.filmLengthInMinutes;
  }

  public set ageLim(age: number) {
    this.ageLimit = age;
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

const godFather = new Film('The Godfather', 'Francis Ford Coppola', 1972, 'USA', 'drama', 18, 175);
const terrifier = new Film('Terrifier', 'Damien Leone', 2016, 'USA', 'horror', 18, 85);
console.log(godFather.filmInfo());
console.log(terrifier.filmInfo());
terrifier.playFilm();
console.log(terrifier.howOldFilmIs());
console.log(godFather.howOldFilmIs());
terrifier.ageLim = 21;
console.log(terrifier.filmInfo());
