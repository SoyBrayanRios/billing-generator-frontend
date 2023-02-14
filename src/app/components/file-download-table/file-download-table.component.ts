import { Component, OnInit } from '@angular/core';
import { BillDetailService } from 'src/app/services/bill-detail.service';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-file-download-table',
  templateUrl: './file-download-table.component.html',
  styleUrls: ['./file-download-table.component.scss']
})
export class FileDownloadTableComponent implements OnInit {

  faDownload = faDownload;

  constructor(private billDetailService: BillDetailService) { }

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

  downloadSmartCsv(year: number, month: number) {
    //this.billDetailService.downloadFaceldiExcel(year, month, []);
  }

}