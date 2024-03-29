import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BillDetailService } from 'src/app/services/bill-detail.service';
import { BillingService } from 'src/app/services/billing.service';
import { GlobalComponent } from 'src/app/global-component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fe-billing-form',
  templateUrl: './fe-billing-form.component.html',
  styleUrls: ['./fe-billing-form.component.scss']
})
export class FeBillingFormComponent implements OnInit {

  billingFormGroup!: FormGroup;
  services: any[] =  GlobalComponent.services;
  years: any[] =  GlobalComponent.years;
  months: any[] =  GlobalComponent.months;
  selectedService: string = this.services[0];
  selectedYear: number = this.years[0];
  selectedMonth: number = this.months[0]['index'];
  initialInvoice: number = 0;

  constructor(private billingService: BillingService,
    private formBuilder: FormBuilder,
    private billDetailService: BillDetailService,
    private router: Router) { }

  ngOnInit(): void {
    this.billingFormGroup = this.formBuilder.group({
      service: this.services[0].value,
      year: [2019],
      month: [1],
      initialInvoice: [0]
    });
  }

  updateYear(event: any) {
    this.selectedYear = event.target.value;
  }
  
  updateMonth(event: any) {
    this.selectedMonth = event.target.value;
  }

  updateService(event: any) {
    this.selectedService = event.target.value;
  }

  generateBills() {
    let service = this.billingFormGroup.get('service')?.value;
    let year = this.billingFormGroup.get('year')?.value;
    let month = this.billingFormGroup.get('month')?.value;
    let initialInvoice = this.billingFormGroup.get('initialInvoice')?.value;
    
    Swal.fire({
      title: '¿Deseas continuar con el procedimiento?',
      text: "Ten en cuenta que no será posible revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, continuar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.billingService.generateBills(year, month, initialInvoice, service).subscribe({
          next: response => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.response,
              showConfirmButton: true,
              willClose: () => { this.router.navigateByUrl('/file-download') }
            });
          },
          error: err => {
            console.log('Err: ', err);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un error al generar la facturación del mes!',
            });
          }
        });
      }
    });
  }

  generateTestBills() {
    let service = this.billingFormGroup.get('service')?.value;
    let year = this.billingFormGroup.get('year')?.value;
    let month = this.billingFormGroup.get('month')?.value;
    let initialInvoice = this.billingFormGroup.get('initialInvoice')?.value;
    
    Swal.fire({
      title: '¿Deseas continuar con el procedimiento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, continuar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {  
        this.billingService.getTestBills(year, month, initialInvoice, service).subscribe({
          next: response => {
            this.billDetailService.downloadFaceldiExcel(year, month, response, service);
            this.billDetailService.downloadSmartCsv(year, month, 'S', service);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Se generó la facturación de prueba con éxito.',
              showConfirmButton: true,
            });
          },
          error: err => {
            console.log('Err: ', err);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un error al generar la facturación del mes!',
            });
          }
        });
      }
    });
  }
}