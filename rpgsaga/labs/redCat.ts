import { Cat } from './cat';

export abstract class RedCat extends Cat {
  bite(): void {
    console.log('this cat can bite.');
  }
}
