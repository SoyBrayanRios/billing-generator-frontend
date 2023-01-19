import { Branch } from "./branch";

export class InvoiceResume {
    id: number;
    year: number;
    month: number;
    issuedInvoices: number;
    branch: Branch;
    constructor(id: number,
        year: number,
        month: number,
        issuedInvoices: number,
        branch: Branch) {
            this.id = id;
            this.year = year;
            this.month = month;
            this.issuedInvoices = issuedInvoices;
            this.branch = branch;
        }
}
