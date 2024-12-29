import { Animal } from '../Abstract/Animal';

export class Dog extends Animal {
  printFoodPreference(): string {
    throw new Error('Method not implemented.');
  }

  private _breed: string;

  constructor(name: string, breed: string, age: number) {
    super(name, age, breed);
    this._breed = breed;
  }

  toString(): string {
    return `${this._name} ${this._breed}`;
  }

  print(): string {
    return `name: ${this.name} breed: ${this.breed} age: ${this.age}`;
  }

  public get breed(): string {
    return this._breed;
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
