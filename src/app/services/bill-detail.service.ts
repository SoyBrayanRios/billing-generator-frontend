import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillDetailService {

  private baseUrl = 'http://localhost:8080/api/bill-detail';

  constructor(private httpClient: HttpClient) { }

  getDetailList(): Observable<any> {
    const searchUrl = `${this.baseUrl}/list`;
    return this.httpClient.get<any>(searchUrl);
  }
}
