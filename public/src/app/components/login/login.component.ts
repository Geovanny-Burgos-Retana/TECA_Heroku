import { Component, OnInit, Input } from '@angular/core';
import { RegistroPage } from '../../pages/registro/registro.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { AuthenticationService, TokenResponse } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() titulo: string;
  @Input() usuario: string;
  @Input() clave: string;

  newUser = new Usuario;

  constructor(
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {}

  setEmail(event: any) {
    this.newUser.email = event.target.value;
  }

  setPassword(event: any) {
    this.newUser.password = event.target.value;
  }

  login(){
    this.usuarioService.loginUser(this.newUser)
    .then((data: TokenResponse) => {
      console.log(data.token);
      this.authenticationService.saveToken(data.token);
      this.navCtrl.navigateForward('/panel');
    })
    .catch(err => {
      // Acción o mensaje de alerta porque el login es incorrecto
    });
  }

  goToRegistro() {
    this.navCtrl.navigateForward('/registro');
  }
}
