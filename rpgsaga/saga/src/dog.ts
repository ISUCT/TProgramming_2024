export class Dog {
  private _name: string;
  private _breed: string;
  private _age: number;

  constructor(name: string, breed: string, age: number) {
    this._name = name;
    this._breed = breed;
    this._age = age;
  }

  toString(): string {
    return `${this._name} ${this._breed}`;
  }
  toNumber(): number {
    return this._age;
  }

  print(): string {
    return `name: ${this.name} breed: ${this.breed} age: ${this.age}`;
  }

  public get name(): string {
    return this._name;
  }
  public get breed(): string {
    return this._breed;
  }
  public get age(): number {
    return this._age;
  }
  public set age(newAge: number) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      throw new Error('Недопустимый возраст');
    }
  }

  public set name(n: string) {
    this._name = n;
  }

  public set breed(newBreed: string) {
    if (newBreed === 'Retriever' || newBreed === 'Dachshund' || newBreed === 'Sheepdog') {
      this._breed = newBreed;
    } else {
      throw new Error('Некорректная порода');
    }
  }

  bark(): void {
    console.log(`${this._name} гавкает!`);
  }
  fetch(item: string) {
    console.log(`Несет ${item}!`);
    return fetch;
  }
  play(): void {
    console.log('Играет с принесённой вещью');
  }
}
