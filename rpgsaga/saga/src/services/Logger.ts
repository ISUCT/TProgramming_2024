interface DebugParams {
  message: string;
  metaInfo?: string;
}

interface LoggerService {
  info(msg: string): void;
  debug(params: DebugParams): void;
  log(msg: string): void;
}

interface ModeParams {
  activeDebug: boolean;
  activeLog: boolean;
  activeInfo: boolean;
}

/**
 * @description
 * * singlton
 */
class Logger implements LoggerService {
  private _activeDebug: boolean = false;
  private _activeInfo: boolean = true;
  private _activeLog: boolean = false;

  public info(message: string) {
    if (this._activeInfo) {
      console.log({
        message: message,
      });
    }
  }

  public debug({ message, metaInfo }: DebugParams) {
    if (this._activeDebug) {
      console.log({
        level: 'DEBUG',
        message: message,
        metaInfo,
      });
    }
  }
  /**
   * * only for testing
   * @description
   */
  public log(...msg: any) {
    if (this._activeLog) {
      console.log(...msg);
    }
  }

  public setMode({ activeDebug, activeLog, activeInfo }: ModeParams) {
    this._activeDebug = activeDebug;
    this._activeInfo = activeInfo;
    this._activeLog = activeLog;
  }
}

export const logger = new Logger();
