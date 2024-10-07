class Fox {
  private _name: string;

  private _age: number;

  private _sex: string;

  constructor(name: string, age: number, sex: string) {
    this._name = name;
    this._age = age;
    this._sex = sex;
  }
  public get name(): string {
    return this._name;
  }
  public set name(n: string) {
    this._name = n;
  }
  public get age(): number {
    return this._age;
  }
  public set age(n: number) {
    if (n < 0) {
      throw new Error('Negative age');
    } else {
      this._age = n;
    }
  }
  public get sex(): string {
    return this._name;
  }
  public set sex(n: string) {
    if (n === 'female' || n === 'male' || n === 'Female' || n === 'Male') {
      this._name = n;
    } else {
      throw new Error('Uncorrect sex parametr');
    }
  }

  whatTheFoxSay(): string {
    return `${this._name}: FoxSound.mp3`;
  }

  foxSleep(hours: number): string {
    if (hours < 0) {
      throw new Error('Fox cannot sleep a negative number of hours');
    }
    if (hours === 0) {
      throw new Error('The fox is not sleeping');
    }
    return `${this._name} sleeps ${hours} hours`;
  }

  foxRun(from: number, to: number): string {
    return `${this._name} ran ${Math.abs(Math.abs(from) - Math.abs(to))} meters`;
  }
}
export { Fox as fox };
