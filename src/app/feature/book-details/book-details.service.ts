import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConfig } from '../../../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class BookDetailsService {
  constructor(private http: HttpClient) {}

  getBookDetails(bookId: string): Observable<any> {
    return this.http.get(APIConfig.getBookDeatails.url(bookId));
  }
  getBookbagesNumber(bookId: string): Observable<any> {
    return this.http.get(APIConfig.getBookbagesNumber.url(bookId));
  }
}
