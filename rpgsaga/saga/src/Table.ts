export class Table {
  private _length: number;
  private _width: number;
  private _height: number;

  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get dimensions(): string {
    return `Table dimensions: Length - ${this._length} sm, Width - ${this._width} sm, Height - ${this._height} sm`;
  }

  get length(): number {
    return this._length;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  set length(length: number) {
    if (length >= 60 && length <= 500) {
      this._length = length;
      return;
    }
    throw new Error('Incorrect length value');
  }

  set width(width: number) {
    if (width >= 40 && width <= 300) {
      this._width = width;
      return;
    }
    throw new Error('Incorrect width value');
  }

  set height(height: number) {
    if (height >= 30 && height <= 130) {
      this._height = height;
      return;
    }
    throw new Error('Incorrect height value');
  }

  tableCategory(): string {
    if (
      this.length >= 60 &&
      this.length <= 100 &&
      this.width >= 40 &&
      this.width <= 60 &&
      this.height >= 30 &&
      this.height <= 70
    ) {
      return 'Small';
    } else if (
      this.length > 100 &&
      this.length <= 180 &&
      this.width > 60 &&
      this.width <= 90 &&
      this.height > 70 &&
      this.height <= 80
    ) {
      return 'Medium';
    } else if (
      this.length > 180 &&
      this.length <= 500 &&
      this.width > 90 &&
      this.width <= 300 &&
      this.height > 80 &&
      this.height <= 130
    ) {
      return 'Large';
    } else {
      return 'Well, I do not know what kind of table you have there';
    }
  }

  isStandard(): boolean {
    if (this.length === 120 && this.width === 80 && this.height === 75) {
      return true;
    }
    return false;
  }
}

