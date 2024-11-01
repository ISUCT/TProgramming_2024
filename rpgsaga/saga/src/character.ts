export class Character {
  private __name: string;
  private __intellect: number;
  private __psyche: number;
  private __physique: number;
  private __motorics: number;

  constructor(name: string, intellect: number, psyche: number, physique: number, motorics: number) {
    this.__name = name;
    this.intellect = intellect;
    this.psyche = psyche;
    this.physique = physique;
    this.motorics = motorics;
  }

  public get name(): string {
    return this.__name;
  }

  public get intellect(): number {
    return this.__intellect;
  }

  public set intellect(intellect: number) {
    if (0 < intellect && intellect < 11) {
      this.__intellect = intellect;
    } else {
      throw new Error('Количество очков интеллекта может быть только от 1 до 10.');
    }
  }

  public get psyche(): number {
    return this.__psyche;
  }

  public set psyche(psyche: number) {
    if (0 < psyche && psyche < 11) {
      this.__psyche = psyche;
    } else {
      throw new Error('Количество очков психики может быть только от 1 до 10.');
    }
  }

  public get physique(): number {
    return this.__physique;
  }

  public set physique(physique: number) {
    if (0 < physique && physique < 11) {
      this.__physique = physique;
    } else {
      throw new Error('Количество очков физиологии может быть только от 1 до 10.');
    }
  }

  public get motorics(): number {
    return this.__motorics;
  }

  public set motorics(motorics: number) {
    if (0 < motorics && motorics < 11) {
      this.__motorics = motorics;
    } else {
      throw new Error('Количество очков моторики может быть только от 1 до 10.');
    }
  }

  public printOverallInfo(): void {
    if (
      0 < this.__intellect &&
      this.__intellect < 11 &&
      0 < this.__psyche &&
      this.__psyche < 11 &&
      0 < this.__physique &&
      this.__physique < 11 &&
      0 < this.__motorics &&
      this.__motorics < 11
    ) {
      console.log(
        `Имя: ${this.__name}\nИнтеллект: ${this.__intellect}\nПсихика: ${this.__psyche}\nФизиология: ${this.__physique}\nМоторика: ${this.__motorics}\n`,
      );
    } else {
      throw new Error(
        'Параметры персонажа были заданы неверно: характеристики могут принимать значения только от 1 до 10.',
      );
    }
  }

  public event(): void {
    if (
      0 < this.__intellect &&
      this.__intellect < 11 &&
      0 < this.__psyche &&
      this.__psyche < 11 &&
      0 < this.__physique &&
      this.__physique < 11 &&
      0 < this.__motorics &&
      this.__motorics < 11
    ) {
      const a = Math.floor(Math.random() * (53 - 4 + 1)) + 4;
      const b = Math.floor(Math.random() * (13 - 2 + 1)) + 2;
      const all = this.__intellect + this.__psyche + this.__physique + this.__motorics;
      if (all + b >= a) {
        console.log(
          `Событие пройдено успешно.\nБыло необходимо очков: ${a}\nСумма характеристик составила: ${all}\nКубики выбросили число: ${b}\nСумма ваших очков: ${all + b}`,
        );
      } else {
        console.log(
          `Событие провалено.\nБыло необходимо очков: ${a}\nСумма характеристик составила: ${all}\nКубики выбросили число: ${b}`,
        );
      }
    } else {
      throw new Error(
        'Параметры персонажа были заданы неверно: характеристики могут принимать значения только от 1 до 10.',
      );
    }
  }
}
