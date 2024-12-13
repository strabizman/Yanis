import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user).pipe(
      catchError(this.handleError)
    );
  }


  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post<any>('http://api.example.com/login', user).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Une erreur est survenue:', error);
    throw error;
  }
}

