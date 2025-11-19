import fs from 'fs';
import type { OutputTarget } from "../summary.js";

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `
        fs.writeFileSync('report.html', html);
    }
}