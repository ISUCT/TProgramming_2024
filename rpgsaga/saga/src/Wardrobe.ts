import { Furniture } from './Furniture';

export class Wardrobe extends Furniture {
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
    if (length >= 30 && length <= 70) {
      this._length = length;
      return;
    }
    throw new Error('Incorrect length value');
  }

  set width(width: number) {
    if (width >= 60 && width <= 120) {
      this._width = width;
      return;
    }
    throw new Error('Incorrect width value');
  }

  set height(height: number) {
    if (height >= 180 && height <= 300) {
      this._height = height;
      return;
    }
    throw new Error('Incorrect height value');
  }

  set material(material: string) {
    const materials: string[] = ['wood', 'metal', 'plastic'];
    if (materials.includes(material)) {
      this._material = material;
      return;
    }
    throw new Error('Incorrect material');
  }

  set weight(weight: number) {
    if (weight >= 40 && weight <= 135) {
      this._weight = weight;
      return;
    }
    throw new Error('Incorrect weight value');
  }

  purpose(): string {
    return 'A wardrobe is a vital piece of furniture used for:\nClothing Storage: Provides space to hang and store clothes.\nOrganization: Helps keep garments organized and accessible.\nAccessory Display: Often includes shelves for shoes, bags, and other accessories.\nRoom Aesthetics: Enhances the decor of a room with its design.';
  }

  approximateСost(): string {
    const costOfMaterials = new Map<string, number>(); // Стоимость материалов в рублях за 1 кг
    costOfMaterials.set('wood', 45);
    costOfMaterials.set('metal', 40);
    costOfMaterials.set('plastic', 15);

    return `The approximate cost of this wardrobe is ${costOfMaterials.get(this.material) * this.weight + costOfMaterials.get(this.material) * this.weight * 0.5} rubles`; // Стоимость считается как стоимость материалов, умноженная на вес изделия + 50% от полученной цены, за то, чтобы создать шкаф
  }
}
