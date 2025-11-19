import type { OutputTarget } from "../summary.js";

export class ConsoleReport implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}