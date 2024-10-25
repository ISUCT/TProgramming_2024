export class Car {
    _brand: string;
    _speed: number;
    _color: string;

    constructor (brand: string, speed: number, color: string) {
        this._brand = brand;
        this._speed = speed;
        this._color = color;
    }

    driveForward(): void {
        console.log("Your", this.brand, "drive forward.");
    }

    driveReverse(): void {
        console.log("Your", this.brand, "drive reverse.");
    }

    engineOn(): void {
        console.log("Engine your", this.brand, "on.");
    }

    engineOff(): void {
        console.log("Engine your", this.brand, "off.");
    }

    get speed(): number {
        return this._speed;
    }

    set speed(newSpeed: number) {
        if (newSpeed >= 0 && newSpeed <= 315) {
            this._speed = newSpeed;
        } else {
            throw new Error("Скорость не может принимать такое значение.");
        }
    }

    get color(): string {
        return this._color;
    }

    set color(newColor: string) {
        let colorLength = newColor.length
        if (colorLength <= 57) {
            this._color = newColor;
        } else {
            throw new Error("Цвет не может иметь такое длинное название.")
        }
    }

    get brand(): string {
        return this._brand;
    }

    set brand(newBrand: string) {
        let brandLength = newBrand.length;
        if (brandLength <= 13) {
            this._brand = newBrand;
        } else {
            throw new Error("Имя бренда не может быть таким длинным.")
        }
    }

    desc(): void {
        console.log(this._brand, this._speed, this._color);
    }
}

