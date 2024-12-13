import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  private apiUrl = 'http://localhost:3000/ships';

  constructor(private http: HttpClient) {}


  getShips(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  getShipById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

