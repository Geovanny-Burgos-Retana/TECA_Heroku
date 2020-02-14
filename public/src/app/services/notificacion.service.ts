import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacion } from '../models/notificacion';
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  notificacionSeleccionado: Notificacion;
  notificacion: Notificacion[];
  readonly URL_API = /*'http://localhost:3000/api/notificaciones'*/ 'https://immense-island-10865.herokuapp.com/api/notificaciones';
  constructor(
    private http: HttpClient
  ) { }
  createNotificacion(notificacion: Notificacion) {
    return this.http.post(this.URL_API, notificacion).toPromise();
  }
  getNotificaciones() {
    return this.http.get(this.URL_API).toPromise();
  }
  getNotificacion(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }
  updateNotificacion(notificacion: Notificacion) {
    this.http.put(this.URL_API + `/${notificacion._id}`, notificacion).toPromise();
  }
  deleteNotificacion(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
}
