import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  getData(endPoint: string) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/scim+json',
        Authorization: this.authService.getAuthorizationHeaderValue()
      })
    };
    return this.http.get(endPoint, httpOption);
  }
  postData(endPoint: string, body: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/scim+json',
        Authorization: this.authService.getAuthorizationHeaderValue()
      })
    };
    return this.http.post(endPoint, body, httpOption);
  }
  patchData(endPoint: string, body: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/scim+json',
        Authorization: this.authService.getAuthorizationHeaderValue()
      })
    };
    return this.http.patch(endPoint, body, httpOption);
  }
  deleteData(endPoint: string) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/scim+json',
        Authorization: this.authService.getAuthorizationHeaderValue()
      })
    };
    return this.http.delete(endPoint, httpOption);
  }
}
