export abstract class Animal {
  protected maxAge: number | undefined;

  protected _age: number | null = null;
  public get age(): number {
    if(this._age === null) {
      throw new Error("Age value is not set");
    }

    return this._age;
  }
  protected set age(value: number) {
    if(!this.maxAge) {
      console.log(this.maxAge);
      throw new Error('Maximum age is not set');
    }

    if (value >= 0 && value <= this.maxAge) {
      this._age = value;
      return;
    }

    throw new Error('Age is invalid');
  }

  private _name: string = 'No name';
  public get name(): string {
    return this._name;
  }
  protected set name(value: string) {
    this._name = value;
  }

  public constructor(age: number, maxAge: number, name?: string) {
    this.maxAge = maxAge;
    this.age = age;

    if(name) {
      this.name = name;
    }
  }

  public abstract interact(): string

}