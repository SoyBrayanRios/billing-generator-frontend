import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as XLSX from 'xlsx';

import { InvoiceResumeService } from 'src/app/services/invoice-resume.service';

@Component({
  selector: 'app-issued-docs-table',
  templateUrl: './issued-docs-table.component.html',
  styleUrls: ['./issued-docs-table.component.scss']
})
export class IssuedDocsTableComponent implements OnInit {

  resumes: string[] = [];
  name = 'Reporte_Emitidos.xlsx';

  constructor(private invoiceResumeService: InvoiceResumeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listResumes(2022);
    });
  }

  listResumes(year: number) {
    this.invoiceResumeService.getInvoiceResumeTable(year).subscribe(
      this.processResumeResult());
  }

  processResumeResult() {
    return (data: any) => {
      this.resumes = data;
    }
  }

  exportToExcel(): void {
    let element = document.getElementById('issued-table');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

}