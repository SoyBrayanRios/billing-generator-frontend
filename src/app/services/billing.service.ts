import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private baseUrl = 'http://localhost:8080/api/billing';

  constructor(private httpClient: HttpClient) { }

  generateBills(year: number, month: number, initialInvoice: number, module: string): Observable<{response: string}> {
    const searchUrl = `${this.baseUrl}/generate/${year}/${month}/${initialInvoice}/P/${module}`;
    return this.httpClient.get<{response: string}>(searchUrl);
  }

  getTestBills(year: number, month: number, initialInvoice: number, module: string): Observable<string[]> {
    const searchUrl = `${this.baseUrl}/fe-faceldi/${year}/${month}/${initialInvoice}/S/${module}`;
    return this.httpClient.get<string[]>(searchUrl);
  }

  getFaceldiReport(year: number, month: number, module: string): Observable<string[]> {
    const searchUrl = `${this.baseUrl}/fe-faceldi/${year}/${month}/P/${module}`;
    return this.httpClient.get<string[]>(searchUrl);
  }

  /*getTestSmartReport(): Observable<any> {
    const searchUrl = `${this.baseUrl}/fe-smart`;
    return this.httpClient.get(searchUrl);
  }*/

  getSmartReport(year: number, month: number, env: string, module: string): Observable<any> {
    const searchUrl = `${this.baseUrl}/fe-smart/${year}/${month}/${env}/${module}`;
    return this.httpClient.get(searchUrl);
  }

}
