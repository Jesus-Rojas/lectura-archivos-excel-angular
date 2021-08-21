import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  ruta = environment.ruta;

  constructor( private http:HttpClient ) { }

  read(){
    const headers = new HttpHeaders({
      'Content-Type': ' application/ms-Excel'
    });
    /* console.log("asds") */
    // Content-Type: application/ms-Excel
    this.http.get(`${this.ruta}/BOGOTA-NEIVA.xlsx`,{headers:headers} ).subscribe( data => {
      console.log(data);
    })
  }
}
