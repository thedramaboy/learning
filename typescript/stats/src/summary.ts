import { WinAnalysis } from "./analyzer/winAnalysis.js";
import type { MatchData } from "./matchData.js";
import { HtmlReport } from "./report/htmlReport.js";

export interface Analyzer {
    run (match: MatchData[]): string;
}

export interface OutputTarget {
    print (report: string): void;
}

export class Summary {
    public analyze: Analyzer;
    public outputTarget: OutputTarget;

    constructor (analyze: Analyzer, outputTarget: OutputTarget) {
        this.analyze = analyze;
        this.outputTarget = outputTarget;
    }

    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinAnalysis(team),
            new HtmlReport()
        )
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyze.run(matches);
        this.outputTarget.print(output);
    }
}