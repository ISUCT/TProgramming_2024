import { title } from "process";
import { workOfArt } from "./superClass";

export class Picture extends workOfArt {
  private _style: string;
  constructor(
    name: string,
    creator: string,
    year: number,
    country: string = '<unknown country>',
    style: string
  ) {
    super(name,year,creator,country);
    this._style = style;
  }
  public get style(): string {
    return this._style;
  }
  
}