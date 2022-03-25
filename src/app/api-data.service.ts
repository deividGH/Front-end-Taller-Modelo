import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//AQUI HACEMOS LA CONEXIÓN CON EL SERVER

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }

  host = 'http://localhost:2020/'

  getJson(){
    const _URL ='http://localhost:2020/api/fromoracle'
    return this.http.get(_URL)
  }
}
