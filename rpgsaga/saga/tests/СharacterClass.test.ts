import { Character } from "../src/Сharacter";

describe("Class Character", () =>{
    it("create Character Warrior", () => {
        const war = new Character("Name", "Warrior");

        expect(war).toEqual({"class": "Warrior", "level": 1, "name": "Name"});
    });
});