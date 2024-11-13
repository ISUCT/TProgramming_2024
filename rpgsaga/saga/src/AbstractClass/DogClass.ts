import { Animal, Male } from './AnimalAbstractClass';

export class Dog extends Animal {
  private _male: Male;

  constructor(name: string, age: number, gender: string, male: Male) {
    super(name, age, gender);
    this.male = male;
  }

  public set male(male: Male) {
    if (male === Male.man || male === Male.woman) {
      this._male = male;
    } else {
      throw new Error('Invalid male value');
    }
  }

  public get male(): Male {
    return this._male;
  }

  makeSound(): string {
    return 'Woof';
  }

  toString(): string {
    return `Dog: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Male: ${this.male}`;
  }
}
