import { fight } from "./fight";
import { Player } from "./Classes_players/Player";
import { create_player } from "./create_player";
const pers_1: Player = create_player();
const pers_2: Player = create_player(); 
fight(pers_1, pers_2);
