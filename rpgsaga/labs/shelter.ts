// import { Cat } from './cat';

import { Idrawable } from './IDrawable';

export class Shelter {
  private _items: Idrawable[];

  constructor() {
    this._items = [];
  }

  addItem(item: Idrawable) {
    this._items.push(item);
  }
  showItems() {
    for (const item of this._items) {
      item.display();
    }
  }
}
