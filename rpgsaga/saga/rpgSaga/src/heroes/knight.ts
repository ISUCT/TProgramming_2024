import { Hero } from './hero';
import { RetributionStrike } from '../abilities/retributionStrike';

export class Knight extends Hero {
    constructor() {
        super(70, 5, new RetributionStrike());
    }
}