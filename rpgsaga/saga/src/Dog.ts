export class Dog {
  private _name: string;
  private _age: number;
  private _breed: string;

  constructor(name: string, age: number, breed: string) {
    this._name = name;
    this._age = age;
    this._breed = breed;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  get breed(): string {
    return this._breed;
  }

  set name(name: string) {
    if (name.length !== 0) {
      this._name = name;
      return;
    }
    throw new Error('Incorrect name');
  }

  set age(age: number) {
    if (age > 0 && age <= 15) {
      this._age = age;
      return;
    }
    throw new Error('Incorrect age');
  }

  set breed(breed: string) {
    const breeds: string[] = [
      'labrador retriever',
      'german shepherd',
      'golden retriever',
      'bulldog',
      'beagle',
      'poodle',
      'rottweiler',
      'yorkshire terrier',
      'boxer',
      'dachshund',
      'siberian husky',
      'great dane',
      'doberman pinscher',
      'chihuahua',
      'shih tzu',
      'border collie',
      'pug',
      'cavalier king charles spaniel',
      'australian shepherd',
      'miniature schnauzer',
    ];
    if (breed in breeds) {
      this._breed = breed;
      return;
    }
    throw new Error('Incorrect breed');
  }

  dogCommands(command: string): string {
    if (command === 'bork') {
      return `${this.name} says: Woof!`;
    } else if (command === 'sit') {
      return `${this.name} sits down`;
    } else if (command === 'stay') {
      return `${this.name} stays in place`;
    } else if (command === 'fetch stick') {
      return `${this.name} fetches the stick`;
    } else {
      return `The dog ${this.name} does not know such a command`;
    }
  }

  dogRoutine(): string {
    return `The dog ${this.name} loves to play and have fun with his master!`;
  }
}
