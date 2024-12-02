enum TransmissionEnum {
    manual = 'manual',
    automatic = 'automatic',
    semiAutomatic = 'semi-automatic'
}

class Car {
    private _model: string;
    private _speed: number;
    private _transmission: string;

    constructor(model: string, speed: number, transmission: string) {
        console.log('Constructor for Car is called');
        this._model = model;
        this._speed = speed;
        this._transmission = transmission;
    }

    get model() {
        return this._model;
    }
    
    set model(newModel: string) {
        this._model = newModel;
    }

    get speed() {
        return this._speed;
    }
    
    set speed(newSpeed: number) {
        if (this.speed < 0 && this.speed > 509) {
        this._speed = newSpeed;
        return;}
        throw new Error('impossible speed');
    }

    get transmission() {
        return this._transmission;
    }

    set transmission(newTransmission: string) {
        newTransmission = newTransmission.toLowerCase();
        if (newTransmission !== TransmissionEnum.manual && newTransmission !== TransmissionEnum.automatic && newTransmission !== TransmissionEnum.semiAutomatic) {
            throw new Error('transmission only can be manual, automatic or semi-automatic');
        }
        this._transmission = newTransmission;
        return;
    }

    transmissionType() {
        if (this._transmission === TransmissionEnum.manual) {console.log('transmission type is manual')};
        if (this._transmission === TransmissionEnum.automatic) {console.log('transmission type is automatic')};
        if (this._transmission === TransmissionEnum.semiAutomatic) {console.log('transmission type is semi-automatic')};}


    toString() {
        return `model: ${this._model}, type: ${this._transmission}`;
    }

    print() {
        return `model: ${this._model}, type: ${this._transmission}, maxSpeed: ${this._speed}`;
    }
}

export {Car};