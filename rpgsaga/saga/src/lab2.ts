export class cat{
    name: string;
    age: number;
    breed: string;
    constructor(catname: string, catage: number, catbreed: string){
        this.name = catname;
        this.age = catage;
        this.breed =catbreed;
    }
    get getname(): string{
        return this.name;
    }
    set setname(valuename: string){
        this.name = valuename;
    }
    get getage(): number{
        return this.age;
    }
    set setage(valueage: number){
        if (valueage < 0 || valueage > 16) {
            console.error("Cats don't live that long!");
        } else {
            this.age = valueage;
        }
    }
    get getbreed(): string{
        return this.name;
    }
    set setbreed(valuebreed: string){
        this.breed = valuebreed;
    }
    get getinfo(): string{
        return `Cat's name: ${this.name}, cat's age: ${this.age}, cat's breed: ${this.breed}`
    }
    changecatname(newname: string): void{
        this.name = newname;
    }
    wherefrom(): string{
        if (this.name === 'Marsik'){
            return "Russia";
        }
        if (this.name === "Kompot"){
            return "Belarus";
        } else {
            return "Ooops... I don't know(";
        }
    }
}
