export enum Colors {
  Red = 'red',
  White = 'white',
  Grey = 'grey',
  Black = 'black',
}

import { Fox } from '../fox';

export class Fennec extends Fox {
  private _lenght: number;
  private _ancestor: string;

  constructor(newName, newAge, newColor, newLenght, newAncestor) {
    super(newName, newAge, newColor);
    this.lenght = newLenght;
    this.ancestor = newAncestor;
  }

  wholeFox(): string {
    return `Name: ${this._name} \n Age: ${this._age} \n Color: ${this._color} \n Lenght: ${this._lenght} \n Ancestor: ${this._ancestor}`;
  }

  public intFact(): string {
    return `${this.name} is believed to be the smallest fox in existence`;
  }

  public get lenght(): number {
    return this._lenght;
  }

  public set lenght(nLenght: number) {
    if (nLenght >= 15 && nLenght < 45) {
      this._lenght = nLenght;
    } else {
      throw new Error("Fennec can't be this long");
    }
  }

  public get ancestor(): string {
    return this._ancestor;
  }

  public set ancestor(nAncestor: string) {
    if (nAncestor === '') {
      throw new Error("There can't be no ancestor");
    } else {
      this._ancestor = nAncestor;
    }
  }
}
