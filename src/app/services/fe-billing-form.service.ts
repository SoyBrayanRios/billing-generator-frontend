import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Branch } from '../common/branch';
import { BranchService } from './branch.service';
import { InvoiceResumeService } from './invoice-resume.service';

@Injectable({
  providedIn: 'root'
})
export class FeBillingFormService {

  branchesWithoutContract: Branch[] = [];
  requiredInvoices: Subject<number> = new BehaviorSubject<number>(0);

  constructor(private invoiceResumeService: InvoiceResumeService,
    private branchService: BranchService) { }

  getBranchesWithoutContract() {
    this.branchService.getBranchesWithoutContract().subscribe(
      data => this.branchesWithoutContract = data
    );
  }
}
