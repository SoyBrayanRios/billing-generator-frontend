import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

import * as XLSX from 'xlsx';

import { InvoiceResumeService } from 'src/app/services/invoice-resume.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, freeSet } from '@coreui/icons';

@Component({
  selector: 'app-issued-docs-table',
  templateUrl: './issued-docs-table.component.html',
  styleUrls: ['./issued-docs-table.component.scss']
})
export class IssuedDocsTableComponent implements OnInit {

  faRotateRight = faRotateRight;
  reportFormGroup!: FormGroup;
  resumes: string[] = [];
  selectedYear: number = 2023;
  name = '';

  constructor(private invoiceResumeService: InvoiceResumeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reportFormGroup = this.formBuilder.group({
      year: [2023],
      module: ['FE']
    });

    this.route.paramMap.subscribe(() => {
      this.listResumes(2023, 'FE');
    });
  }

  listResumes(year: number, appModule: string) {
    this.name = `Reporte_Emitidos_${year}.xlsx`;
    this.invoiceResumeService.getInvoiceResumeTable(year, appModule).subscribe(
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
    XLSX.utils.book_append_sheet(book, worksheet, 'Resumen');

    XLSX.writeFile(book, this.name);
  }

  updateReport() {
    this.selectedYear = this.reportFormGroup.get('year')?.value;
    this.listResumes(this.selectedYear, 'FE');
  }

  updateYear(event: any) {
    this.selectedYear = event.target.value;
    this.updateReport();
  }

}