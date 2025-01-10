// class Kitten {
//   private name: string;
//   private age: number;
//   private breed: string;

//   constructor(name: string, age: number, breed: string) {
//       this.name = name;
//       this.age = age;
//       this.breed = breed;
//   }

//   get getName() {
//       return this.name;
//   }

//   get getAge() {
//       return this.age;
//   }

//   get getBreed() {
//       return this.breed;
//   }

//   set setName(newName: string) {
//       this.name = newName;
//   }

//   set setAge(newAge: number) {
//       if (newAge > 20) {
//           console.error("Cats don't live that long!");
//       } else {
//           this.age = newAge;
//       }
//   }

//   set setBreed(newBreed: string) {
//       this.breed = newBreed;
//   }

//   get getInfo() {
//       return `Kitten's name: ${this.name}, Kitten's age: ${this.age}, Kitten's breed: ${this.breed}`;
//   }

//   changeCatName(newName: string) {
//       this.name = newName;
//   }

//   whereFrom() {
//       if (this.name === 'Marsik') {
//           return 'Russia';
//       } else if (this.name === 'Kompot') {
//           return 'Belarus';
//       } else {
//           return "Ooops... I don't know(";
//       }
//   }
// }
