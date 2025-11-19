import { dateStringToDate } from './utils.js';
import { MatchResult } from './matchResult.js';
import type { MatchData } from './matchData.js';
import { CsvFileReader } from './csvFileReader.js';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {

    public matches: MatchData[] = [];
    public data: DataReader;

    constructor(data: DataReader) {
        this.data = data;
    }

    static fromCsv(filename: string) {
        return new MatchReader(new CsvFileReader(filename));
    }

    load(): void {
        this.data.read();
        this.matches = this.data.data
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]!),
                row[1]!,
                row[2]!,
                parseInt(row[3]!),
                parseInt(row[4]!),
                row[5] as MatchResult,
                row[6]!
            ];
        })
    }
}