import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from '../common/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private baseUrl = 'http://localhost:8080/api/branches';

  constructor(private httpClient: HttpClient) { }

  getbranches(): Observable<Branch[]> {
    const searchUrl = `${this.baseUrl}/all`;
    return this.httpClient.get<Branch[]>(searchUrl);
  }

  getBranch(branchId: number): Observable<Branch> {
    const searchUrl = `${this.baseUrl}/${branchId}`;
    return this.httpClient.get<Branch>(searchUrl);
  }

  getBranchesWithoutContract() {
    const searchUrl = `${this.baseUrl}/to-update`;
    return this.httpClient.get<Branch[]>(searchUrl);
  }
}
