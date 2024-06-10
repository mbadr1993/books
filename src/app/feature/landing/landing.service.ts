import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConfig } from '../../../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  constructor(private http: HttpClient) {}

  getBooksBySubject(subject: string): Observable<any> {
    return this.http.get(APIConfig.getBooksBySubject.url(subject));
  }
}
