import { WorkOfArt } from './workOfArt';

export class Picture extends WorkOfArt {
  private _style: string;
  private _url: string;
  constructor(
    name: string,
    creator: string,
    year: number,
    country: string = '<unknown country>',
    style: string,
    pictureURL: string,
  ) {
    super(name, year, creator, country);
    this._style = style;
    this._url = pictureURL;
  }
  public get style(): string {
    return this._style;
  }
  public get url(): string {
    return this._url;
  }
  public display(): void {
    console.log(`URL to "${this.name}" is '${this.url}'`);
  }
}
