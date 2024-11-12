export abstract class Animal {
  private _name: string;
  private _age: number;
  private _gender: string;

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
    return `Animal: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

export class Cat extends Animal {
  private _male: string;

  constructor(name: string, age: number, gender: string, male: string) {
    super(name, age, gender);

    if (male === 'man' || male === 'woman') {
      this._male = male;
    } else {
      throw new Error('Invalid male value');
    }
  }

  public set male(male: string) {
    if (male === 'man' || male === 'woman') {
      this._male = male;
    } else {
      throw new Error('Invalid male value');
    }
  }

  public get male(): string {
    return this._male;
  }

  makeSound(): string {
    return 'Meow';
  }

  toString(): string {
    return `Cat: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Male: ${this.male}`;
  }
}

export class Dog extends Animal {
  private _male: string;

  constructor(name: string, age: number, gender: string, male: string) {
    super(name, age, gender);

    if (male === 'man' || male === 'woman') {
      this._male = male;
    } else {
      throw new Error('Invalid male value');
    }
  }

  public set male(male: string) {
    if (male === 'man' || male === 'woman') {
      this._male = male;
    } else {
      throw new Error('Invalid male value');
    }
  }

  public get male(): string {
    return this._male;
  }

  makeSound(): string {
    return 'Woof';
  }

  toString(): string {
    return `Dog: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Male: ${this.male}`;
  }
}

const animals: Animal[] = [new Cat('Whiskers', 2, 'female', 'woman'), new Dog('Buddy', 3, 'male', 'man')];

animals.forEach(animal => {
  console.log(animal.toString());
  console.log(animal.makeSound());
});
