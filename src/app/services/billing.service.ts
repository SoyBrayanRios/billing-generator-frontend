import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private baseUrl = 'http://localhost:8080/api/billing';

  constructor(private httpClient: HttpClient) { }

  generateBills(year: number, month: number, initialInvoice: number): Observable<{response: string}> {
    const searchUrl = `${this.baseUrl}/generate/${year}/${month}/${initialInvoice}/P`;
    return this.httpClient.get<{response: string}>(searchUrl);
  }

  getTestBills(year: number, month: number, initialInvoice: number): Observable<string[]> {
    const searchUrl = `${this.baseUrl}/fe-faceldi/${year}/${month}/${initialInvoice}/S`;
    return this.httpClient.get<string[]>(searchUrl);;
  }

  getFaceldiReport(year: number, month: number): Observable<string[]> {
    const searchUrl = `${this.baseUrl}/fe-faceldi/${year}/${month}/P`;
    return this.httpClient.get<string[]>(searchUrl);;
  }

}
