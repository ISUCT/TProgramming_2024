export abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _gender: string;

  constructor(name: string, age: number, gender: string) {
    this._name = name;
    this._age = age;
    this._gender = gender;
  }

  abstract makeSound(): string;

  public set age(age: number) {
    if (age < 0) {
      throw new Error('Invalid age');
    }
    this._age = age;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set gender(gender: string) {
    this._gender = gender;
  }

  public get age() {
    return this._age;
  }

  public get name() {
    return this._name;
  }

  public get gender() {
    return this._gender;
  }

  toString(): string {
    return `Animal: ${this._name}, Age: ${this._age}, Gender: ${this._gender}`;
  }
}

export class Cat extends Animal {
  private _male: string;

  constructor(name: string, age: number, gender: string, male: string) {
    super(name, age, gender);
    this._male = male;
  }

  public set male(male: string) {
    if (male === 'man' || male === 'women') {
      this._male = male;
    } else {
      throw new Error('Invalid male');
    }
  }

  public get male() {
    return this._male;
  }

  makeSound(): string {
    return 'Meow';
  }

  toString(): string {
    return `Cat: ${this._name}, Age: ${this._age}, Gender: ${this._gender}, Male: ${this._male}`;
  }
}

export class Dog extends Animal {
  private _male: string;

  constructor(name: string, age: number, gender: string, male: string) {
    super(name, age, gender);
    this._male = male;
  }

  public set male(male: string) {
    if (male === 'man' || male === 'women') {
      this._male = male;
    } else {
      throw new Error('Invalid male');
    }
  }

  public get male() {
    return this._male;
  }

  makeSound(): string {
    return 'Woof';
  }

  toString(): string {
    return `Dog: ${this._name}, Age: ${this._age}, Gender: ${this._gender}, Male: ${this._male}`;
  }
}

const animals: Animal[] = [new Cat('Whiskers', 2, 'female', 'woman'), new Dog('Buddy', 3, 'male', 'man')];

animals.forEach(animal => {
  console.log(animal.toString());
  console.log(animal.makeSound());
});
