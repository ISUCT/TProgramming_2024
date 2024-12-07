export abstract class Person {
    private _name: string;
    private _age: number;
    private _sick: boolean;

    constructor(name: string, age: number, isSick: boolean = false) {
        this._name = name;
        this.age = age;
        this._sick = isSick;
    }

    abstract come(): void;
    abstract toString(): void;

    public get sick(): boolean {
        return this._sick;
    }
    public set sick(isSick: boolean) {
        this._sick = isSick;
    }

    public get name(): string {
      return this._name;
    }
      public set name(name: string) {
        this._name = name;
      }
      public get age(): number {
        return this._age;
      }
      public set age(age: number) {
        if (age < 0) {
          throw new Error('Age cannot be negative.');
        }
        this._age = age;
      }
}