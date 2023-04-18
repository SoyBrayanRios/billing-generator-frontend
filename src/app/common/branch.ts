import { Client } from "./client";

export class Branch {
    branchId: number;
    code: string;
    name: string;
    country: string;
    department: number;
    deptName: string;
    state: number;
    stateName: string;
    center: number;
    address: string;
    addressComp: string;
    phone: string;
    email: string;
    active!: boolean;
    client: Client;
    fe!: boolean;
    ds!: boolean;
    ne!: boolean;
    constructor(branchId: number,
        code: string,
        name: string,
        country: string,
        department: number,
        deptName: string,
        state: number,
        stateName: string,
        center: number,
        address: string,
        addressComp: string,
        phone: string,
        email: string,
        active: boolean,
        client: Client,
        fe: boolean,
        ds: boolean,
        ne: boolean) {
            this.branchId = branchId;
            this.code = code;
            this.name = name;
            this.country = country;
            this.department = department;
            this.deptName = deptName;
            this.state = state;
            this.stateName = stateName;
            this.center = center;
            this.address = address;
            this.addressComp = addressComp;
            this.phone = phone;
            this.email = email;
            this.client = client;
            this.active = active;
            this.fe = fe;
            this.ds = ds;
            this.ne = ne;
    }
}
