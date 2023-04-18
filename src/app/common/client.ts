import { Alliance } from "./alliance";
import { Branch } from "./branch";

export class Client {
    nit: string;
    idType: number;
    personType: number;
    regimeType: number;
    name: string;
    lastName: string;
    lastName2: string;
    firstName: string;
    middleName: string;
    department: number;
    state: number;
    address: number;
    zipCode: string;
    email: string;
    equivalentDoc: boolean;
    alliance: Alliance;
    dv: string;
    branches: Branch[];

    constructor(nit: string,
        idType: number,
        personType: number,
        regimeType: number,
        name: string,
        lastName: string,
        lastName2: string,
        firstName: string,
        middleName: string,
        department: number,
        state: number,
        address: number,
        zipCode: string,
        email: string,
        equivalentDoc: boolean,
        alliance: Alliance,
        dv: string,
        branches: Branch[]) {
            this.nit = nit;
            this.idType = idType;
            this.personType = personType;
            this.regimeType = regimeType;
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
