import { Component, OnInit } from '@angular/core';
import { FeBillingFormService } from 'src/app/services/fe-billing-form.service';

@Component({
  selector: 'app-required-invoices',
  templateUrl: './required-invoices.component.html',
  styleUrls: ['./required-invoices.component.scss']
})
export class RequiredInvoicesComponent implements OnInit {

  requiredInvoices: number = 0;

  constructor(private feBillingFormService: FeBillingFormService) { }

  ngOnInit(): void {
    this.updateRequiredInvoices();
  }

  updateRequiredInvoices() {
    this.feBillingFormService.requiredInvoices.subscribe(      
      data => this.requiredInvoices = data
    );
  }

}
