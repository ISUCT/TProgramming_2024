import { Player } from '../Player';

export class Logger {
  static log(message: string): void {
    console.log(message);
  }

  public static startOfTheGame(): void {
    console.log('Let the show begin!');
  }

  public static startOFTheRound(roundNumber: number): void {
    console.log(`-----------Round number ${roundNumber} begins!-----------`);
  }

  public static startOFTheBattle(): void {
    console.log(``);
  }

  public static notEvenPlayers(): void {
    console.log('Number of players is not even. Try again.');
  }

  public static death(poorSoul: Player): void {
    console.log(`The player under the name of ${poorSoul.getName()} is dead!\n`);
  }

  public static winner(winner: Player): void {
    console.log(` ${winner.getName()} won! \n`);
  }

  public static gameOver(winner: Player): void {
    console.log(`-----------Game is over. The winner is ${winner.getName()}!-----------`);
  }
}
