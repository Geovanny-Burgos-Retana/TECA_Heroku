import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  estudianteSeleccionado: Estudiante;
  estudiantes: Estudiante[];
  readonly URL_API = /*'http://localhost:3000/api/estudiantes'*/ 'https://immense-island-10865.herokuapp.com/';
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Servicio de sollicitud al servidor de creacion de un estudiante
   * @param estudiante JSON con datos del estudiante
   */
  createEstudiante(estudiante: Estudiante) {
    return this.http.post<Estudiante>(this.URL_API, estudiante).toPromise();
  }

  /**
   * Servicio de solicitud al servidor de eliminacion de un estudiante
   * @param _id ID de un estudiante
   */
  deleteEstudiante(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
  
  getEstudiantes() {
    return this.http.get(this.URL_API).toPromise();
  }
  
  getEstudiante(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }

  updateEstudiante(estudiante: Estudiante) {
    this.http.put(this.URL_API + `/${estudiante._id}`, estudiante).toPromise();
  }

  
}
