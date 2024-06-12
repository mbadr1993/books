import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConfig } from '../../../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(query: string, type?: string): Observable<any> {
    return this.http.get(APIConfig.search.url(query, type ? type : ''));
  }
}
