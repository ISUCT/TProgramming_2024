export class Logger {
  private static _instance: Logger = new Logger();
  private _logs: string[] = [];

  constructor() {
    Logger._instance = this;
  }

  public static getInstance(): Logger {
    return Logger._instance;
  }

  createLog(log: string) {
    console.log(log);
    this._logs.push(log);
  }
}
