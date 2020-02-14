import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  temaSeleccionado: Tema;
  tema: Tema[];
  readonly URL_API = /*'http://localhost:3000/api/temas'*/ 'https://immense-island-10865.herokuapp.com/api/temas';
  constructor(
    private http: HttpClient
  ) { }
  createTema(tema: Tema) {
    return this.http.post(this.URL_API, tema).toPromise();
  }
  getTemas() {
    return this.http.get(this.URL_API).toPromise();
  }
  getTema(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }
  updateTema(tema: Tema) {
    this.http.put(this.URL_API + `/${tema._id}`, tema).toPromise();
  }
  deleteTema(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
}
