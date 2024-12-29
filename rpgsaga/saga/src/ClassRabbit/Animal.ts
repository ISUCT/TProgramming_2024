export abstract class Animal {
  protected age: number;
  protected name: string;
  protected color: string;

  constructor(age: number, name: string, color: string) {
    console.log('Constructor for adding new Animal:');
    this.age = age;
    this.name = name;
    this.color = color;
  }

  set setAge(newAge: number) {
    if (newAge < 0) {
      throw new Error('age cant be below zero');
    }
    this.age = newAge;
  }

  set setColor(newColor: string) {
    if (newColor === '') {
      throw new Error('string "color" cant be empty');
    }
    this.color = newColor;
  }

  set setName(newName: string) {
    if (newName === '') {
      throw new Error('string "name" cant be empty');
    }
    this.name = newName;
  }

  get getAge(): number {
    return this.age;
  }

  get getColor(): string {
    return this.color;
  }

  get getName(): string {
    return this.name;
  }

  abstract makeSound(): void;
}
