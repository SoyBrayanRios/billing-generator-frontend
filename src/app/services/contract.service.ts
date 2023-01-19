import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from '../common/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private baseUrl = 'http://localhost:8080/api/contract';

  constructor(private httpClient: HttpClient) { }

  saveContract(contract: Contract): Observable<any> {
    let saveContractUrl = 'http://localhost:8080/api/contract/';
    return this.httpClient.post<Contract>(saveContractUrl, contract);
  }
}
