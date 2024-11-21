export class City {
  private _name: string;
  private _population: number;
  private _country: string;

  constructor(name: string, population: number, country: string) {
    this.name = name;
    this.population = population;
    this.country = country;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set population(population: number) {
    if (population >= 1 && population <= 2000000) {
      this._population = population;
    } else {
      throw new Error('Wrong population');
    }
  }

  public set country(country: string) {
    this._country = country;
  }

  public get name() {
    return this._name;
  }

  public get population() {
    return this._population;
  }

  public get country() {
    return this._country;
  }
}
