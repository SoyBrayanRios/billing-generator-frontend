export class PaymentPlan {
    discriminatorType!: number;
    packageName!: string;
    documentQuantity!: number;
    packagePrice!: number;
    documentPrice!: number;
    paymentFrequency!: any;
    costRanges!: string;
    modulePlan!: string;
}
