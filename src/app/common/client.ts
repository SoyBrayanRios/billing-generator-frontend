import { Alliance } from "./alliance";
import { Branch } from "./branch";

export class Client {
    nit: string;
    dv: string;
    name: string;
    firstName: string;
    middleName: string;
    lastName: string;
    lastName2: string;
    department: number;
    state: number;
    address: number;
    zipCode: string;
    email: string;
    equivalentDoc: boolean;
    alliance: Alliance;
    branches: Branch[];

    constructor(nit: string,
        dv: string,
        name: string,
        firstName: string,
        middleName: string,
        lastName: string,
        lastName2: string,
        department: number,
        state: number,
        address: number,
        zipCode: string,
        email: string,
        equivalentDoc: boolean,
        alliance: Alliance,
        branches: Branch[]) {
            this.nit = nit;
            this.dv = dv;
            this.name = name;
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
            this.lastName2 = lastName2;
            this.department = department;
            this.state = state;
            this.address = address;
            this.zipCode = zipCode;
            this.email = email;
            this.equivalentDoc = equivalentDoc;
            this.alliance = alliance;
            this.branches = branches;
    }
}
