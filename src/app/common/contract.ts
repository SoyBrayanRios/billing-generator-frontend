import { Branch } from "./branch";
import { MaintenanceType } from "./maintenance-type";
import { PaymentPlan } from "./payment-plan";

export class Contract {
    contractId!: string;
    contractDate!: Date;
    createdBy!: string;
    implementationCost!: number;
    sharedContract!: boolean;
    sharedContractId!: string;
    ipcIncrease!: boolean;
    firstIssueDate!: Date;
    prepaid!: boolean;
    implementationAlreadyPaid!: boolean;
    maintenanceAlreadypaid!: boolean;
    maintenanceType!: MaintenanceType;
    paymentPlan!: PaymentPlan;
    branch!: Branch;

    /*constructor(contractId: string,
        contractDate: Date,
        createdBy: string,
        implementationCost: number,
        sharedContract: boolean,
        sharedContractId: string,
        ipcIncrease: boolean,
        firstIssueDate: Date,
        prepaid: boolean,
        implementationAlreadyPaid: boolean,
        maintenanceAlreadypaid: boolean,
        paymentPlan: PaymentPlan,
        branch: Branch
        ) {
        this.contractId = contractId;
        this.contractDate = contractDate;
        this.createdBy = createdBy;
        this.implementationCost = implementationCost;
        this.sharedContract = sharedContract;
        this.sharedContractId = sharedContractId;
        this.ipcIncrease = ipcIncrease;
        this.firstIssueDate = firstIssueDate;
        this.prepaid = prepaid;
        this.implementationAlreadyPaid = implementationAlreadyPaid;
        this.maintenanceAlreadypaid = maintenanceAlreadypaid;
        this.paymentPlan = paymentPlan;
        this.branch = branch;
    }*/
}
