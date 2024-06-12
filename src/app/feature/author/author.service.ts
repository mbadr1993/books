import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConfig } from '../../../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAuthorDetails(authorID: string): Observable<any> {
    return this.http.get(APIConfig.getAuthorDeatails.url(authorID));
  }
  getAutherRestDetails(uery: string, type?: string): Observable<any> {
    return this.http.get(
      APIConfig.getAuthorDeatailsRestDetails.url(uery, type)
    );
  }
}
