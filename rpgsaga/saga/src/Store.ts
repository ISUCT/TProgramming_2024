import { IDrawable } from './IDrawable';

export class Store {
  private _items: IDrawable[];

  constructor() {
    this._items = [];
  }

  addItem(item: IDrawable) {
    this._items.push(item);
  }

  showItems() {
    for (const item of this._items) {
      item.display();
    }
  }
}
