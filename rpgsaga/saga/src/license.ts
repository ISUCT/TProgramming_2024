import { Certificate } from './certificate';

export class License extends Certificate {
  private _expired: boolean;

  constructor(documentType: string, size: number, yearOfCreation: number, expired: boolean) {
    super(documentType, size, yearOfCreation);
    this._expired = expired;
  }

  private set expired(expired: boolean) {
    if (typeof expired !== 'boolean') {
      this._expired = expired;
      return;
    }
    throw new Error(`License has invalid expired status (not boolean)`);
  }

  get expired(): boolean {
    return this._expired;
  }

  public giveLicense() {
    console.log(`The license which ${this._expired} was given to you`);
  }
}
