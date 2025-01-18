import { Volleyball_Player } from "./Volleyball_player_Class";

const human_1 = new Volleyball_Player("Ivan", 19, 'm', 181, 70, "Setter", 295, 320, "ISUCT");
const humsn_2 = new Volleyball_Player("Maria", 17, "woman", 170, 55, "Libero", 210, 240, 'ISUCT');
console.log(human_1.view_player_parameters());
console.log(humsn_2.view_player_parameters());
humsn_2.place_jumping = 220;
humsn_2.running_jumping = 250;
console.log(humsn_2.view_player_parameters());