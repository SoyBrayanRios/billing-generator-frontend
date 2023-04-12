import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { InvoiceResume } from '../common/invoice-resume';
import { Branch } from '../common/branch';

@Injectable({
  providedIn: 'root'
})
export class InvoiceResumeService {

  private baseUrl = 'http://localhost:8080/api/inv-resume';
  private branchUrl = 'http://localhost:8080/api/branch';

  constructor(private httpClient: HttpClient) { }

  getInvoiceResume(module: string): Observable<InvoiceResume[]> {
    const searchUrl = `${this.baseUrl}/all/${module}`;
    return this.httpClient.get<InvoiceResume[]>(searchUrl);
  }

  getInvoiceResumeTable(year: number, module: string): Observable<string[]> {
    const searchUrl = `${this.baseUrl}/data-table/${year}/FE`;
    return this.httpClient.get<string[]>(searchUrl);
  }

  getSingleResume(branchId: number, year: number, month: number): Observable<Branch> {
    const searchUrl = `${this.baseUrl}/${branchId}?year=${year}?month=${month}`;
    return this.httpClient.get<Branch>(searchUrl);
  }

  getInvoiceResumeXYearMonth(year: number, month: number): Observable<number> {
    const searchUrl = `${this.baseUrl}/count/${year}/${month}`;
    return this.httpClient.get<number>(searchUrl);
  }
  
}