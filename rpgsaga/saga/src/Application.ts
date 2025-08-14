import { IApp } from './IApp';

export class Application implements IApp {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  runApp() {
    console.log(`running app ${this.name}`);
  }
}
