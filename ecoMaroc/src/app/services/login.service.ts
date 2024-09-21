import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  path:string = "http://localhost:8080/api/v1/auth"
  constructor(private router: Router,private http : HttpClient) { }
    onLogin(username:string,password:string): Observable<string> {
       const url = '/login';
       const body = { username, password }; 
       const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          }),
          responseType: 'text' as 'json' 
        };
        return this.http.post<string>(
          this.path+url, body, httpOptions
        );
      }
    logout(): void {
      localStorage.removeItem('access_token');
    }
  
    public get loggedIn(): boolean {
      return localStorage.getItem('access_token') !== null;
    }
  
    public getToken(): string | null {
      return localStorage.getItem('access_token');
    }
  
    public setToken(token: string): void {
      localStorage.setItem('access_token', token);
    }

  }

