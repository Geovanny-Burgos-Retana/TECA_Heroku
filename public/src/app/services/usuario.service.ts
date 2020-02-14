import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Usuario } from '../models/usuario';

import { AuthenticationService, TokenResponse } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioSeleccionado: Usuario;
  usuario: Usuario[];
  readonly URL_API = 'http://localhost:3000/api/users';
  
  constructor(private http: HttpClient) {}

  /**
   * Servicio de creacion de un usuario
   * @param user JSON con datos del usuario
   */
  createUser(user: Usuario) {
    return this.http.post<TokenResponse>(this.URL_API + '/signup', user).toPromise();
  }

  /**
   * Servicio para asignar el avatar del usuario
   * @param user Json con el id del usuario y el avatar
   */
  updateAvatar(user: Usuario) {
    return this.http.put(this.URL_API + '/put_avatar', user).toPromise();
  }

  loginUser(user: Usuario) {
    return this.http.post<TokenResponse>(this.URL_API + '/signin', user).toPromise();
  }

  createUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API, usuario).toPromise();
  }

  getUsuarioLogin(email: String, password: String) {
    return this.http.get(this.URL_API + `/${email}` + `/${password}`);
  }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.URL_API, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }

  getUsuario(_id: string) {
    return this.http.get(this.URL_API + `/${_id}` ).toPromise();
  }

  updateUsuario(usuario: Usuario) {
    this.http.put(this.URL_API + `/${usuario._id}`, usuario).toPromise();
  }

  deleteUsuario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}` ).toPromise();
  }
}
