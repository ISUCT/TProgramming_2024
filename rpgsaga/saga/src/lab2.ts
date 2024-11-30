export class Film {

    private _title: string;
    private _director: string;
    private _duration: number; 

    constructor(title: string, director: string, duration: number) {
        this._title = title;
        this._director = director;
        this._duration = duration;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get director(): string {
        return this._director;
    }

    set director(value: string) {
        this._director = value;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    play(): void {
        console.log(`Играет фильм "${this._title}" режиссера ${this._director}. Длительность: ${this._duration} минут`);
    }

    getInfo(): string {
        return `Фильм: "${this._title}", Режиссер: ${this._director}, Длительность: ${this._duration} минут.`;
    }

    updateFilmInfo(director: string, duration: number): void {
        this._director = director;
        this._duration = duration;
    }
}