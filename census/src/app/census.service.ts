import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CensusService {
  private apiUrl = 'http://localhost:3000/api/census';

  constructor(private http: HttpClient) { }

  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addRecord(record: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, record);
  }

  // Similar methods for update and delete
}
