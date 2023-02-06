import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Branch } from 'src/app/common/branch';
import { Contract } from 'src/app/common/contract';
import { Frequency } from 'src/app/common/frequency';
import { MaintenanceType } from 'src/app/common/maintenance-type';
import { PaymentPlan } from 'src/app/common/payment-plan';
import { BranchService } from 'src/app/services/branch.service';
import { ContractService } from 'src/app/services/contract.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {

  contractFormGroup!: FormGroup;
  branch!: Branch;
  contract!: Contract;
  paymentTypeId: number = 1;
  firstIssuedDate!: Date;
  frequencies: Frequency[] = [
    {frequencyId: 1, frequencyName: "Diario"},
    {frequencyId: 2, frequencyName: "Semanal"},
    {frequencyId: 3, frequencyName: "Quincenal"},
    {frequencyId: 4, frequencyName: "Mensual"},
    {frequencyId: 5, frequencyName: "Bimestral"},
    {frequencyId: 6, frequencyName: "Trimestral"},
    {frequencyId: 7, frequencyName: "Semestral"},
    {frequencyId: 8, frequencyName: "Anual"}
  ];
  documentPackages: any = [
    {id: 1, name: "Fantasía", docQuantity: 5, price: 15000, additionalDoc: 650, frequency: this.frequencies[7], costRange: ''},
    {id: 2, name: "Bronce", docQuantity: 10, price: 29900, additionalDoc: 650, frequency: this.frequencies[7], costRange: ''},
    {id: 3, name: "Plata", docQuantity: 20, price: 41900, additionalDoc: 650, frequency: this.frequencies[7], costRange: ''},
    {id: 4, name: "Oro", docQuantity: 50, price: 55900, additionalDoc: 650, frequency: this.frequencies[7], costRange: ''},
    {id: 5, name: "Bolsa 1", docQuantity: 250, price: 162500, additionalDoc: 650, frequency: this.frequencies[3], costRange: ''},
    {id: 6, name: "Bolsa 2", docQuantity: 500, price: 290000, additionalDoc: 650, frequency: this.frequencies[3], costRange: ''},
    {id: 7, name: "Bolsa 3", docQuantity: 1000, price: 499000, additionalDoc: 650, frequency: this.frequencies[3], costRange: ''},
    {id: 8, name: "Independientes", docQuantity: 25, price: 15000, additionalDoc: 650, frequency: this.frequencies[3], costRange: ''},
    {id: 9, name: "Emprendedores", docQuantity: 100, price: 49900, additionalDoc: 650, frequency: this.frequencies[3], costRange: ''},
    {id: 10, name: "Pymes", docQuantity: 300, price: 69900, additionalDoc: 650, frequency: this.frequencies[3], costRange: ''},
    {id: 11, name: "Crecimiento", docQuantity: 500, price: 99900, additionalDoc: 650, frequency: this.frequencies[3], costRange: ''},
    {id: 12, name: "Empresarial", docQuantity: 1000, price: 149900, additionalDoc: 650, frequency: this.frequencies[3], costRange: ''},
    {id: 12, name: "Plan S", docQuantity: 100, price: 29900, additionalDoc: 650, frequency: this.frequencies[3], 
    costRange: '{"Planes":[{"Nombre":"Plan S","Desde":0,"Hasta":100,"Valor":29900},{"Nombre":"Plan M","Desde":101,"Hasta":500,"Valor":69900},{"Nombre":"Plan L","Desde":501,"Hasta":99999999,"Valor":99900}]}'},
    {id: 12, name: "Plan M", docQuantity: 500, price: 69900, additionalDoc: 650, frequency: this.frequencies[3],
    costRange: '{"Planes":[{"Nombre":"Plan S","Desde":0,"Hasta":100,"Valor":29900},{"Nombre":"Plan M","Desde":101,"Hasta":500,"Valor":69900},{"Nombre":"Plan L","Desde":501,"Hasta":99999999,"Valor":99900}]}'},
    {id: 12, name: "Plan L", docQuantity: 1000, price: 99900, additionalDoc: 650, frequency: this.frequencies[3],
    costRange: '{"Planes":[{"Nombre":"Plan S","Desde":0,"Hasta":100,"Valor":29900},{"Nombre":"Plan M","Desde":101,"Hasta":500,"Valor":69900},{"Nombre":"Plan L","Desde":501,"Hasta":99999999,"Valor":99900}]}'}
  ];
  selectedPackage: any = this.documentPackages[0];

  constructor(private branchService: BranchService,
    private invoiceService: InvoiceService,
    private contractService: ContractService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getBranch();
    });

    this.contractFormGroup = this.formBuilder.group({
      tempContract: this.formBuilder.group({
        contractId: [],
        contractDate: [],
        createdBy: [''],
        implementationCost: [0],
        implementationAlreadyPaid: [false],
        sharedContract: [false],
        sharedContractId: [],
        ipcIncrease: [false],
        firstIssueDate: [], //Calculate
        prepaid: [false],
        maintenanceFrequency: [this.frequencies[7]],
        maintenanceCost: [0],
        maintenanceAlreadyPaid: [false]
      }),
      paymentPlan: this.formBuilder.group({
        discriminatorType: [this.paymentTypeId],
        packageName: [this.selectedPackage.id],
        documentQuantity: [this.selectedPackage.docQuantity],
        packagePrice: [this.selectedPackage.price],
        documentPrice: [this.selectedPackage.additionalDoc],
        costRange: [this.selectedPackage.costRange],
        paymentFrequency: [this.selectedPackage.frequency.frequencyName]
      })
    });

  }

  getBranch() {
    const branchId = +this.route.snapshot.paramMap.get('id')!;
    this.branchService.getBranch(branchId).subscribe(
      data => {
        this.branch = data;
      }
    );
  }

  getFrequencyById(id: number): Frequency {
    let frequency: Frequency = new Frequency();
    frequency.frequencyId = this.frequencies[id - 1].frequencyId;
    frequency.frequencyName = this.frequencies[id - 1].frequencyName;
    return frequency;
  }

  getFrequencyByName(name: string): Frequency {
    let frequency: Frequency = new Frequency();
    this.frequencies.forEach((item: Frequency) => {
      if (item.frequencyName == name) {
        frequency.frequencyId = item.frequencyId;
        frequency.frequencyName = item.frequencyName;
      }
    });
    return frequency;
  }

  getFirstIssuedDate(branchId: number) {
    this.invoiceService.getFirstIssuedDate(branchId).subscribe(
      data => this.firstIssuedDate = data
    );
  }

  setPaymentType(event: any) {
    this.paymentTypeId = event.target.value;
    this.contractFormGroup.controls['paymentPlan'].reset();
    this.contractFormGroup.get('paymentPlan.discriminatorType')?.setValue(this.paymentTypeId);
    this.contractFormGroup.get('paymentPlan.costRange')?.setValue('');
    this.contractFormGroup.get('paymentPlan.packageName')?.setValue('');
    this.contractFormGroup.get('paymentPlan.documentQuantity')?.setValue(0);
    this.contractFormGroup.get('paymentPlan.packagePrice')?.setValue(0);
    this.contractFormGroup.get('paymentPlan.documentPrice')?.setValue(0);
    this.contractFormGroup.get('paymentPlan.paymentFrequency')?.setValue(this.frequencies[3]);
  }

  selectPackage(event: any) {
    let index: number = event.target.value - 1;
    this.selectedPackage = this.documentPackages[+index];
    this.contractFormGroup.get('paymentPlan.packageName')?.setValue(this.selectedPackage.id);
    this.contractFormGroup.get('paymentPlan.documentQuantity')?.setValue(this.selectedPackage.docQuantity);
    this.contractFormGroup.get('paymentPlan.packagePrice')?.setValue(this.selectedPackage.price);
    this.contractFormGroup.get('paymentPlan.documentPrice')?.setValue(this.selectedPackage.additionalDoc);
    this.contractFormGroup.get('paymentPlan.paymentFrequency')?.setValue(this.selectedPackage.frequency.frequencyName);
    this.contractFormGroup.get('paymentPlan.costRange')?.setValue(this.selectedPackage.costRange);
  }

  async onSubmit() {
    //Obtener todos los datos del plan de pago
    let paymentPlan = new PaymentPlan();
    paymentPlan = this.contractFormGroup.controls['paymentPlan'].value;
    if (paymentPlan.discriminatorType==1) {
      paymentPlan.packageName = this.selectedPackage['name'];
      paymentPlan.paymentFrequency = this.selectedPackage['frequency'];
    }
    if (paymentPlan.discriminatorType == 4) {
      paymentPlan.discriminatorType = 1;
      paymentPlan.paymentFrequency = this.getFrequencyById(paymentPlan.paymentFrequency);
    }
    if (paymentPlan.discriminatorType != 1) {
      paymentPlan.paymentFrequency = this.frequencies[3];
    }
    paymentPlan.modulePlan = 'FE';
    
    //Obtener todos los datos del mantenimiento
    let maintenanceType = new MaintenanceType();
    maintenanceType.maintenanceCost = this.contractFormGroup.get('tempContract.maintenanceCost')?.value;
    maintenanceType.maintenanceFrequency = this.getFrequencyById(this.contractFormGroup.get('tempContract.maintenanceFrequency')?.value);
    
    
    //Obtener todos los datos del contrato
    this.contract = this.contractFormGroup.controls['tempContract'].value;
    this.contract.paymentPlan = paymentPlan;
    this.contract.branch = this.branch;
    this.contract.maintenanceType = maintenanceType;
    let tempDate: Date = this.contract.contractDate;
    
    //this.contract.contractDate = tempDate.getDate() + 1;

    await firstValueFrom(this.invoiceService.getFirstIssuedDate(this.branch.branchId)).then((date) => {
      this.contract.firstIssueDate = date;
    });
    console.log(this.contract);
    
    this.contractService.saveContract(this.contract).subscribe({
      next: response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `El contrato No. ${response.contractId} ha sido guardado con éxito.`,
          showConfirmButton: true,
          willClose: () => { this.router.navigateByUrl('/fe-bill') }
        });
      },
      error: err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verifique los datos del formulario!',
        })
      }
    });
  }
}
