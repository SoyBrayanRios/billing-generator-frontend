import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = 'http://localhost:8080/api/invoice';
  
  constructor(private httpClient: HttpClient) { }

  getFirstIssuedDate(branchId: number): Observable<Date> {
    const searchUrl = `${this.baseUrl}/first/${branchId}`;
    return this.httpClient.get<Date>(searchUrl);
  }

}
