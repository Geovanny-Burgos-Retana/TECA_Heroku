import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';
@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  asignaturaSeleccionado: Asignatura;
  asignatura: Asignatura[];
  readonly URL_API = /*'http://localhost:3000/api/asignaturas'*/ 'https://immense-island-10865.herokuapp.com/api/asignaturas';
  constructor(
    private http: HttpClient
  ) { }
  createAsignatura(asignatura: Asignatura) {
    return this.http.post(this.URL_API, asignatura).toPromise();
  }
  getAsignaturas() {
    return this.http.get(this.URL_API).toPromise();
  }
  getAsignatura(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }
  updateAsignatura(asignatura: Asignatura) {
    this.http.put(this.URL_API + `/${asignatura._id}`, asignatura).toPromise();
  }
  deleteAsignatura(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
}
