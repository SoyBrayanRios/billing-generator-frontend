import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Frequency } from '../common/frequency';

@Injectable({
  providedIn: 'root'
})
export class FrequencyService {

  private baseUrl = 'http://localhost:8080/api/frequency';

  constructor(private httpClient: HttpClient) { }

  getFrequency(frequencyId: number) {
    const searchUrl = `${this.baseUrl}/${frequencyId}`;
    return this.httpClient.get<Frequency[]>(searchUrl);
  }
}
