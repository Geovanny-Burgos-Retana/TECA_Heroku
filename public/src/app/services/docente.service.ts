import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  docenteSeleccionado: Docente;
  docentes: Docente[];

  readonly URL_API = /*'http://localhost:3000/api/docentes'*/ 'https://immense-island-10865.herokuapp.com/';

  constructor(private http: HttpClient) { 
    this.docenteSeleccionado = new Docente();
  }

  /**
   * Servicio de sollicitud al servidor de creacion de un docente
   * @param docente JSON con datos del docente
   */
  createDocente(docente: Docente) {
    return this.http.post<Docente>(this.URL_API, docente).toPromise();
  }

  /**
   * Servicio de solicitud al servidor de eliminacion de un docente
   * @param _id ID de un docente
   */
  deleteDocente(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }

  getDocentes() {
    return this.http.get(this.URL_API).toPromise();
  }

  getDocente(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }

  updateDocente(docente: Docente) {
    this.http.put(this.URL_API + `/${docente._id}`, docente).toPromise();
  }
}
