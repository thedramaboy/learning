export class CharacterCollection {
    public data: string;

    constructor(data: string) {
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex]!.toLowerCase() > this.data[rightIndex]!.toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const charArray = this.data.split('');
        const temp = charArray[leftIndex];
        charArray[leftIndex] = charArray[rightIndex]!;
        charArray[rightIndex] = temp!;
        this.data = charArray.join('');
    }
}