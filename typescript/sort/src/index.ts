import { Sorter } from './sorter.js';
import { NumberCollection } from './numberCollection.js';
import { CharacterCollection } from './characterCollection.js';

// const numberCollection = new NumberCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

const stringCollection = new CharacterCollection("Dome");
const sorter = new Sorter(stringCollection);
sorter.sort();
console.log(stringCollection.data);