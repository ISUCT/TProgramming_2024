export abstract class Animal {
  protected age: number;
  protected sex: string;
  protected breed: string;
  protected name: string;

  constructor(name: string, age: number, sex: string, breed: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.breed = breed;
  }

  get getSex() {
    return this.sex;
  }

  set setSex(option: string) {
    const lowerCaseOption = option.toLowerCase();
    if (lowerCaseOption === 'male' || lowerCaseOption === 'female') {
      this.sex = lowerCaseOption;
    } else {
      throw new Error("Incorrect input of animal's sex");
    }
  }

  get getBreed() {
    return this.breed;
  }

  set setBreed(theBreed: string) {
    this.breed = theBreed;
  }

  get getName() {
    return this.name;
  }

  set setName(theName: string) {
    this.name = theName;
  }

  get getAge() {
    return this.age;
  }

  set setAge(theAge: number) {
    if (theAge <= 0 || theAge >= 50) {
      throw new Error('Age is invalid');
    } else {
      this.age = theAge;
    }
  }

  abstract makeSound(): string;
}
