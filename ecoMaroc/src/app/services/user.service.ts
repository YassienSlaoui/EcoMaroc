import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path:string = "http://localhost:8080/api/v1/user/test"
  constructor(private http :HttpClient) { }
    test(): Observable<string> {

      const httpOptions = {
        //  headers: new HttpHeaders({
        //    'Content-Type':  'application/json'
        //  }),
         responseType: 'text' as 'json' 
       };
      return this.http.get<string>(this.path,httpOptions);
    }
}
