import { CellPhone } from './CellPhone';
import { IApp } from './IApp';

export abstract class SmartPhone extends CellPhone {
  abstract display();
  protected apps: IApp[];

  constructor(modelName: string, phoneNumber: string, weight: number) {
    super(modelName, phoneNumber, weight);
    this.apps = [];
  }

  installApp(app: IApp) {
    this.apps.push(app);
  }

  runApp(name: string) {
    const app = this.apps.find(itm => itm.name === name);
    if (app) {
      app.runApp();
      return;
    }
    throw new Error(`No such app ${name}`);
  }
}
