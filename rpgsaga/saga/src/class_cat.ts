export class Cat {
  private _age: number;
  private _sex: string;
  private _breed: string;
  private _name: string;

  constructor(name: string, age: number, sex: string, breed: string) {
    this._name = name;
    this._age = age;
    this._sex = sex;
    this._breed = breed;
  }

  public get sex() {
    return this._sex;
  }

  public set sex(option: string) {
    const lowerCaseOption = option.toLowerCase();
    if (lowerCaseOption === 'male' || lowerCaseOption === 'female') {
      this._sex = lowerCaseOption;
    } else {
      throw new Error("Incorrect input of cat's sex");
    }
  }

  public get breed() {
    return this._breed;
  }

  public set breed(theBreed: string) {
    this._breed = theBreed;
  }

  public get name() {
    return this._name;
  }

  public set name(theName: string) {
    this._name = theName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 50) {
      throw new Error('Age is invalid');
    } else {
      this._age = theAge;
    }
  }

  meow(): string {
    return `${this._name} says: Meow!`;
  }

  feedTheCat(amount: number): string {
    if (amount < 0) {
      throw new Error('You cannot enter a negative number of grams');
    }
    if (amount === 0) {
      throw new Error('You are not feeding a cat');
    }
    return `You gave ${this._name} ${amount} grams of food. Thank you!`;
  }
  renameTheCat(newName: string): string {
    const oldName = this._name;
    this._name = newName;
    return `${oldName} now named as ${newName}.`;
  }
}
