export class ResumeDetail {
    id: number;
    detail: string[];

    constructor(id: number,
        detail: string[]) {
            this.id = id;
            this.detail = detail;
    }
}
