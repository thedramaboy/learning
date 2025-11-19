import { MatchReader } from "./MatchReader.js";
import { MatchResult } from "./matchResult.js";

const matches = new MatchReader('football.csv');
matches.read();

const dateOfFirstMatch = matches.data[0]![0];

// console.log(matches.data);

// console.log(matches);

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';

// const MatchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// }

let manUnitedWins = 0;

for (let match of matches.data) {
    if(match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games.`);

