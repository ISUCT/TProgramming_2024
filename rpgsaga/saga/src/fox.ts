    export enum Colors {
    Red = "red",
    White = "white",
    Grey = "grey",
    Black = "black",
  }
  
    export class Fox {
    private name: string;
    private age: number;
    private color: Colors;
  
    constructor(name: string, age: number, color: Colors) {
      this.name = name;
  
      const ageError = this.setAge(age);
      if (ageError) throw ageError;
  
      const colorError = this.setColor(color);
      if (colorError) throw colorError;
    }
  
    public getView(): string {
      return `
       /\\   /\\   
      //\\\\_//\\\\     ____
      \\_     _/    /   /
       / * * \\    /^^^]
       \\_\\O/_/    [   ]
        /   \\_    [   /
        \\     \\_  /  /
         [ [ /  \\/ _/
        _[ [ \\  /_/
      `;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getAge(): number {
      return this.age;
    }
  
    public getColor(): Colors {
      return this.color;
    }
  
    public setAge(age: number) {
      if (age >= 0 && age < 33) {
        this.age = age;
        return null;
      }
      return new Error("foxes don't live so long");
    }
  
    public setColor(color: Colors) {
      if (Object.values(Colors).includes(color)) {
        this.color = color;
        return null;
      }
      return new Error("foxes don't have such color");
    }
  
    public displayFox(): void {
      console.log(`   Name - ${this.name}`);
      console.log(`   Age - ${this.age}`);
      console.log(`   Color - ${this.color}`);
    }
  }
  
  function newFox(name: string, age: number, color: Colors): Fox | Error {
    try {
      return new Fox(name, age, color);
    } catch (error) {
      return error as Error;
    }
  }
  
  const fox = newFox("Foxy", 5, Colors.Red);
  if (fox instanceof Fox) {
    fox.displayFox();
    console.log(fox.getView());
  } else {
    console.error(fox.message);
  }