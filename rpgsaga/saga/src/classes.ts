    export class DocumentClass {
    private documentType: string;
    private size: number;
    private yearOfCreation: number;

    constructor(documentType: string, size: number, yearOfCreation: number) {
        this.documentType = documentType;
        this.size = this.setSize(size);
        this.yearOfCreation = yearOfCreation;
    }

    public setSize(size: number): number {
        if (size > 0) {
            return this.size = size;
        } else {
            throw new Error(`Document of type ${this.getDocumentType()} has invalid size`);
        }
    }

    public setYearOfCreation(yearOfCreation: number): number {
        if (yearOfCreation > 0) {
            return this.yearOfCreation = yearOfCreation;
        } else {
            throw new Error(`Document of type ${this.getDocumentType()} has invalid year of creation`);
        }
    }

    public getDocumentType(): string {
        return this.documentType;
    }

    public getDocumentSize(): number {
        return this.size;
    }

    public getDocumentDate(): number {
        return this.yearOfCreation;
    }

    public deleteDocument(): void {
        console.log(`Document of type ${this.getDocumentType()} created ${this.getDocumentDate()} was sent to the recycle bin`);
    }
}