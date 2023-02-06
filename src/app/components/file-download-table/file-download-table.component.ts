import { Component, OnInit } from '@angular/core';
import { BillDetailService } from 'src/app/services/bill-detail.service';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-file-download-table',
  templateUrl: './file-download-table.component.html',
  styleUrls: ['./file-download-table.component.scss']
})
export class FileDownloadTableComponent implements OnInit {

  faDownload = faDownload;

  constructor(private billDetailService: BillDetailService,
    private billingService: BillingService) { }

  details: any = [];

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable() {
    this.billDetailService.getDetailList().subscribe(
      data => {
        this.details = data
      }
    );
  }

  downloadFaceldiExcel(year: number, month: number) {
    this.billDetailService.downloadFaceldiExcel(year, month, []);
  }

}