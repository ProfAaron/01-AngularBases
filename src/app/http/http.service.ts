import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from './http.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  obtenerInfo(pais: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(`https://restcountries.com/v3.1/name/${pais}`)
  }
}
