export class Logger {
  private logFile: string;

  constructor(logFile: string = 'game_log.txt') {
    this.logFile = logFile;
  }

  static log(message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp}: ${message}\n`;
    console.log(logEntry);
  }
}
