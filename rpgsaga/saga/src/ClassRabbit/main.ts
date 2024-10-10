import { Rabbit } from "./Rabbit";

const rabbit1 = new Rabbit(2, "Kyle", "grey");
console.log(rabbit1);
rabbit1.SetColor("black");
console.log(rabbit1);
console.log(rabbit1.getAge());