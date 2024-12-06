import { Hero } from './hero';
import { RetributionStrike } from '../abilities/retributionStrike';

export class Knight extends Hero {
    health = 70;
    attackPower = 5;
    ability = new RetributionStrike();
}