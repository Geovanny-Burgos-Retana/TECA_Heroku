import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UsuarioService } from '../../services/usuario.service';
import { AuthenticationService } from '../../services/authentication.service';

import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-avatar-select',
  templateUrl: './avatar-select.component.html',
  styleUrls: ['./avatar-select.component.scss'],
})
export class AvatarSelectComponent implements OnInit {
  @Input() titulo: string;
  @Input() tipo1: string;
  @Input() tipo2: string;
  
  idUsuario: string;
  public visibleProfessor = false;
  public visibleStudent = false;
  tipoUsuario: string;
  
  constructor(
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private authenticationService: AuthenticationService
  ) { 
    this.tipoUsuario = authenticationService.getUserDetails().tipo;
    this.visibleProfessor = this.tipoUsuario == 'Docente';
    this.visibleStudent = !this.visibleProfessor;
    console.log(this.tipoUsuario);
    console.log(this.visibleProfessor);
    console.log(this.visibleStudent);
  }

  ngOnInit() { }

  /**
   * Ingresar el avatar seleccionado por el usuario 
   * @param usuario Json con id y avatar del usuario
   */
  setAvatarUser(usuario: Usuario) {
    usuario._id = this.authenticationService.getUserDetails()._id;
    if (usuario.avatar != 'none') {
      this.usuarioService.updateAvatar(usuario)
      .then(status => {
        console.log(status);
      })
      .catch(err => {
        console.log(err);
      });
      localStorage.clear();
      this.goToInicio();
    } else {
      console.log("Seleccione un avatar");
    }
  }

  checked(){
    console.log(this.tipoUsuario);
    return true;
  }

  goToInicio() {
    this.navCtrl.navigateForward('/inicio');
  }
}
