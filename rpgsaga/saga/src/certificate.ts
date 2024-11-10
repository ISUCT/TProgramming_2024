export abstract class Certificate {
  protected _documentType: string;
  protected _size: number;
  protected _yearOfCreation: number;
  constructor(documentType: string, size: number, yearOfCreation: number) {
    this._documentType = documentType;
    this._size = size;
    this._yearOfCreation = yearOfCreation;
  }

  private set size(size: number) {
    if (size > 0) {
      this._size = size;
      return;
    }
    throw new Error(`Document of type ${this._documentType} has invalid size`);
  }

  public get documentType(): string {
    return this._documentType;
  }

  public get size(): number {
    return this._size;
  }

  public get yearOfCreation(): number {
    return this._yearOfCreation;
  }

  deleteDocument() {
    console.log(
      `Certificate of type ${this._documentType} created ${this._yearOfCreation} was sent to the recycle bin`,
    );
  }
}
