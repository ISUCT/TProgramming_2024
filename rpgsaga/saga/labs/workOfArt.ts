export abstract class WorkOfArt {
  private _nameOfWork: string;
  private _yearOfWork: number;
  private _creator: string;
  private _country: string;
  constructor(name: string, year: number, creator: string, country: string) {
    this._nameOfWork = name;
    this.year = year;
    this._creator = creator;
    this._country = country;
  }

  private set year(value: number) {
    if (value > new Date().getFullYear() + 10) {
      throw new Error('Incorrect year');
    } else {
      this._yearOfWork = value;
    }
  }

  public get name(): string {
    return this._nameOfWork;
  }

  public get director(): string {
    return this._creator;
  }

  public get year(): number {
    return this._yearOfWork;
  }

  public get country(): string {
    return this._country;
  }

  abstract display(): void;
}
