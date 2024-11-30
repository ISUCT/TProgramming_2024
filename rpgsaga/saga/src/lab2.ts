export class Film {
  private title: string;
  private director: string;
  private duration: number;

  constructor(title: string, director: string, duration: number) {
    this.title = title;
    this.director = director;
    this.duration = duration;
  }

  get title1(): string {
    return this.title;
  }

  set title1(value: string) {
    this.title = value;
  }

  get director2(): string {
    return this.director;
  }

  set director2(value: string) {
    this.director = value;
  }

  get duration3(): number {
    return this.duration;
  }

  set duration3(value: number) {
    this.duration = value;
  }

  play(): void {
    console.log(`Играет фильм "${this.title}" режиссера ${this.director}. Длительность: ${this.duration} минут`);
  }

  getInfo(): string {
    return `Фильм: "${this.title}", Режиссер: ${this.director}, Длительность: ${this.duration} минут.`;
  }

  updateFilmInfo(director: string, duration: number): void {
    this.director = director;
    this.duration = duration;
  }
}
