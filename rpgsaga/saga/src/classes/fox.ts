export enum Colors {
  Red = 'red',
  White = 'white',
  Grey = 'grey',
  Black = 'black',
}

export abstract class Fox {
  protected _name: string;
  protected _age: number;
  protected _color: Colors;

  constructor(newName: string, newAge: number, newColor: Colors) {
    this.name = newName;
    this.age = newAge;
    this.color = newColor;
  }

  toString(): string {
    return `${this._name} ${this._color}`;
  }

  toNumber(): number {
    return this._age;
  }

  wholeFox(): string {
    return `Name: ${this._name} \n Age: ${this._age} \n Color: ${this._color}`;
  }

  public get view(): string {
  return `
     /\\   /\\   
    //\\\\_//\\\\  ____
    \\_     _/    /   /
     / * * \\    /^^^]
     \\_\\O/_/    [   ]
      /   \\_    [   /
      \\     \\_  /  /
       [ [ /  \\/ _/
      _[ [ \\  /_/
    `;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }

  public get color(): Colors {
    return this._color;
  }

  public set age(nAge: number) {
    if (nAge >= 0 && nAge < 33) {
      this._age = nAge;
    } else {
      throw new Error("foxes dont live so long")};
  }

  public set color(nColor: Colors) {
    if (Object.values(Colors).includes(nColor)) {
      this._color= nColor;
    } else {
      throw new Error("foxes dont have such color")};
  }

  public set name(nName: string) {
    if (nName === "") {
      throw new Error("foxes names cannot be empty");
    } else {
      this._name = nName};
  }

  abstract intFact(): string;
}