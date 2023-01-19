import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BillingService } from 'src/app/services/billing.service';
import { FeBillingFormService } from 'src/app/services/fe-billing-form.service';
import { InvoiceResumeService } from 'src/app/services/invoice-resume.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fe-billing-form',
  templateUrl: './fe-billing-form.component.html',
  styleUrls: ['./fe-billing-form.component.scss']
})
export class FeBillingFormComponent implements OnInit {

  years: any[] = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];
  months: any[] = [{name: 'Enero', index: 1},
                  {name: 'Febrero', index: 2},
                  {name: 'Marzo', index: 3},
                  {name: 'Abril', index: 4},
                  {name: 'Mayo', index: 5},
                  {name: 'Junio', index: 6},
                  {name: 'Julio', index: 7},
                  {name: 'Agosto', index: 8},
                  {name: 'Septiembre', index: 9},
                  {name: 'Octubre', index: 10},
                  {name: 'Noviembre', index: 11},
                  {name: 'Diciembre', index: 12}];
  selectedYear: number = this.years[0];
  selectedMonth: number = this.months[0]['index'];
  initialInvoice: number = 2674;

  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
  }

  updateYear(event: any) {
    this.selectedYear = event.target.value;
  }
  
  updateMonth(event: any) {
    this.selectedMonth = event.target.value;
  }

  generateBills(year: number, month: number, initialInvoice: number) {
    this.billingService.generateBills(year, month, initialInvoice).subscribe({
      next: response => {
        console.log('Response: ', response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: response.response,
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
    //console.log(year, month, initialInvoice);
    
  }
}