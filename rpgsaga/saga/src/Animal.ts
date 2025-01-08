export abstract class Animal {
    protected _name: string;
    protected _age: number;
    protected _sex: string;
  
    constructor(name: string, age: number, sex: string) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
  
    get name(): string {
      return this._name;
    }
  
    get age(): number {
      return this._age;
    }
  
    get sex(): string {
      return this._sex;
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
  
    set sex(sex: string) {
      sex.toLowerCase();
      if (sex === 'female' || sex === 'male') {
        this._sex = sex;
        return;
      }
      throw new Error('Incorrect sex');
    }
  
    toString(): string {
      return `Name: ${this.name}, Age: ${this.age}, Sex: ${this.sex}`;
    }
  
    abstract commands(command: string);
  
    abstract voice();
  
    routine(): string {
      return `The animal ${this.name} loves to play and have fun with his master!`;
    }
  }