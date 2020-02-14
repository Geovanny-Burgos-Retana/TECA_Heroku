import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recordatorio } from '../models/recordatorio';
@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {
  recordatorioSeleccionado: Recordatorio;
  recordatorio: Recordatorio[];
  readonly URL_API = /*'http://localhost:3000/api/recordatorios'*/ 'https://immense-island-10865.herokuapp.com/api/recordatorios';
  constructor(
    private http: HttpClient
  ) { }
  createRecordatorio(recordatorio: Recordatorio) {
    return this.http.post(this.URL_API, recordatorio).toPromise();
  }
  getRecordatorios() {
    return this.http.get(this.URL_API).toPromise();
  }
  getRecordatorio(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }
  updateRecordatorio(recordatorio: Recordatorio) {
    this.http.put(this.URL_API + `/${recordatorio._id}`, recordatorio).toPromise();
  }
  deleteRecordatorio(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
}
