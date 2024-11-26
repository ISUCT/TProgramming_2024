import { Furniture } from './Furniture';

// Переделал методы для класса, тк предыдущие мне не понравились (да и эти тоже не нравятся)

export class Table extends Furniture {
  constructor(length: number, width: number, height: number, material: string, weight: number) {
    super();
    this.length = length;
    this.width = width;
    this.height = height;
    this.material = material;
    this.weight = weight;
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

  get material(): string {
    return this._material;
  }

  get weight(): number {
    return this._weight;
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
    if (height >= 15 && height <= 130) {
      this._height = height;
      return;
    }
    throw new Error('Incorrect height value');
  }

  set material(material: string) {
    const materials: string[] = ['wood', 'metal', 'stone', 'glass', 'plastic'];
    if (materials.includes(material)) {
      this._material = material;
      return;
    }
    throw new Error('Incorrect material');
  }

  set weight(weight: number) {
    if (weight >= 30 && weight <= 200) {
      this._weight = weight;
      return;
    }
    throw new Error('Incorrect weight value');
  }

  purpose(): string {
    return 'A table is a versatile piece of furniture used for various functions, including:\nActivity Surface: Provides a flat area for dining, working, and playing games.\nSocial Gathering: Facilitates interactions during meals and discussions.\nStorage: Often includes drawers or shelves for organizing items.\nDisplay: Showcases decorative items or plants.\nSupport: Holds computers and equipment in offices.';
  }

  approximateСost(): string {
    const costOfMaterials = new Map<string, number>(); // Стоимость материалов в рублях за 1 кг
    costOfMaterials.set('wood', 45);
    costOfMaterials.set('metal', 40);
    costOfMaterials.set('stone', 120);
    costOfMaterials.set('glass', 30);
    costOfMaterials.set('plastic', 15);

    return `The approximate cost of this table is ${costOfMaterials.get(this.material) * this.weight + costOfMaterials.get(this.material) * this.weight * 0.3} rubles`; // Стоимость считается как стоимость материалов, умноженная на вес изделия + 30% от полученной цены, за то, чтобы создать стол
  }
}
