export class Dish {
    
    name: string;
    price: number;
    type: string;

    constructor(dishname: string, dishprice: number, dishtype: string) {
        this.name = dishname;
        this.price = dishprice;
        this.type = dishtype;
    }
    
    get getname(): string {
        return this.name;
    }

    set setname(valuename: string) {
        this.name = valuename;
    }

    get getprice(): number {
        return this.price;
    }

    set setprice(valueprice: number) {
        if (valueprice < 0) {
            console.error("The price cannot be less than zero!");
        } else {
            this.price = valueprice;
        }
    }

    get gettype(): string {
        return this.type;
    }

    set settype(valuetype: string) {
        this.type = valuetype;
    }

    get getinfo(): string {
        return `Dish's name: ${this.name}, dish's price: ${this.price}, dish's type: ${this.type}`
    }
}