export class Auto {
    private speed: number;
    private color: string;
    private size: string;
    private distance: number;

    constructor() {
        this.speed = 0;
        this.color = "";
        this.size = "";
        this.distance = 0;
    }

    getSpeed(): number {
        if (this.speed <= 0) {
            console.log("Ты физику уважаешь? Отрицательная скорость? Цвет и размер уже не важны.");
            this.speed = 0;
        } else if (this.speed > 300) {
            console.log("Это птица? Это самолёт? Нет, это машину в воздух хотят запустить. Цвет и размер уже не уважны.");
            this.speed = 0;
        }
        return this.speed;
    }

    setSpeed(speed: number): void {
        this.speed = speed;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    getDistance(): number {
        if (this.distance < 0) {
            console.log("Ну я так не играю, давай нормальное расстояние");
            this.distance = 0;
        }
        return this.distance;
    }

    setDistance(distance: number): void {
        this.distance = distance;
    }

    getSize(): string {
        return this.size;
    }

    setSize(size: string): void {
        this.size = size;
    }
}

export function calculateTime(auto: Auto): number {
    const distance = auto.getDistance();
    const speed = auto.getSpeed();

    if (speed === 0) {
        return 0;
    }

    const time = distance / speed;
    return time === 1 ? 0 : time;
}
