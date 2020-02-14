import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unidad } from '../models/unidad';
@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  unidadSeleccionado: Unidad;
  unidad: Unidad[];
  readonly URL_API = /*'http://localhost:3000/api/unidades'*/'https://immense-island-10865.herokuapp.com/api/unidades';
  constructor(
    private http: HttpClient
  ) { }
  createUnidad(unidad: Unidad) {
    return this.http.post(this.URL_API, unidad).toPromise();
  }
  getUnidades() {
    return this.http.get(this.URL_API).toPromise();
  }
  getUnidad(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }
  updateUnidad(unidad: Unidad) {
    this.http.put(this.URL_API + `/${unidad._id}`, unidad).toPromise();
  }
  deleteUnidad(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
}
