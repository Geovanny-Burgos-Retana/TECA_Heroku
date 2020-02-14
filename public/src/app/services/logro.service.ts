import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logro } from '../models/logro';

@Injectable({
  providedIn: 'root'
})
export class LogroService {
  logroSeleccionado: Logro;
  logro: Logro[];
  readonly URL_API = /*'http://localhost:3000/api/logros'*/ 'https://immense-island-10865.herokuapp.com/';
  constructor(
    private http: HttpClient
  ) { }
  createLogro(logro: Logro) {
    return this.http.post(this.URL_API, logro).toPromise();
  }
  getLogros() {
    return this.http.get(this.URL_API).toPromise();
  }
  getLogro(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }
  updateLogro(logro: Logro) {
    this.http.put(this.URL_API + `/${logro._id}`, logro).toPromise();
  }
  deleteLogro(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
}
