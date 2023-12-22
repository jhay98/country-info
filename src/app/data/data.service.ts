import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) { }

  nameSearch(searchTerm: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/name/${searchTerm}?fields=name,flags,tld`)
  }

  detailSearch(searchTerm: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/name/${searchTerm}?fullText=true`)
  }

}
