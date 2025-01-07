export class Film {
  private _title: string;
  private _duration: number; // Длительность фильма в минутах
  private _genre: string;

  // Конструктор с параметрами
  constructor(title: string, duration: number, genre: string) {
      this._title = title;
      this._duration = duration;
      this._genre = genre;
  }

  // Метод для получения названия фильма
  public getTitle(): string {
      return this._title;
  }

  // Метод для установки названия фильма
  public setTitle(title: string): void {
      this._title = title;
  }

  // Метод для получения длительности фильма
  public getDuration(): number {
      return this._duration;
  }

  // Метод для установки длительности фильма
  public setDuration(duration: number): void {
      if (duration > 0) {
          this._duration = duration;
      } else {
          throw new Error('Duration must be a positive number');
      }
  }

  // Метод для получения жанра фильма
  public getGenre(): string {
      return this._genre;
  }

  // Метод для установки жанра фильма
  public setGenre(genre: string): void {
      this._genre = genre;
  }

  // Метод для проигрывания фильма
  public playFilm(): void {
      console.log(`Now playing: ${this.getTitle()} (${this.getGenre()})`);
  }

  // Метод для отображения информации о фильме
  public getInfo(): void {
      console.log(`\nTitle: ${this.getTitle()}`);
      console.log(`Duration: ${this.getDuration()} minutes`);
      console.log(`Genre: ${this.getGenre()}`);
  }
}