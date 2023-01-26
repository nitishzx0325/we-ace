import { Happy } from './happy';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HappyService {
  private baseUrl = 'http://localhost:8080/api/v1/happy';
  constructor(private httpClient: HttpClient) {}

  getHappyList(): Observable<Happy[]> {
    return this.httpClient.get<Happy[]>(`${this.baseUrl}`);
  }
  createHappyList(happy: Happy): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, happy);
  }
}
