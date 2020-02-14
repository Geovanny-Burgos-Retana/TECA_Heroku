import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthenticationService } from '../../../services/authentication.service';

import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-student-avatar',
  templateUrl: './student-avatar.component.html',
  styleUrls: ['./student-avatar.component.scss'],
})
export class StudentAvatarComponent implements OnInit {
  @Input() tipo1: string;
  @Input() tipo2: string;
  @Input() comando: string;
  @Input() mensaje: string;
  @Output() newStudentEvent = new EventEmitter();

  tipo:string;
  public visibleMasculino = false;
  public visibleFemenino = true;
  
  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.tipo = this.authenticationService.getUserDetails().sexo;
    this.visibleFemenino = this.tipo == 'Femenino';
    this.visibleMasculino = !this.visibleFemenino;
    console.log(this.tipo);
    console.log(this.visibleFemenino);
    console.log(this.visibleMasculino);
  }

  ngOnInit() {
    this.setVisibleAvatar();
  }

  setVisibleAvatar() {
    if (this.authenticationService.getUserDetails().sexo == 'Femenino') {
      this.visibleFemenino = true;
      this.visibleMasculino = false;
    } else {
      this.visibleFemenino = false;
      this.visibleMasculino = true;
    }
  }

  create(usuario: Usuario) {
    this.newStudentEvent.emit(usuario);
  }

  selectType(event: any) {
    this.setVisible();
  }

  setVisible() {
    if (this.visibleFemenino === false) {
      this.visibleFemenino = true;
      this.visibleMasculino = false;
    } else {
      this.visibleFemenino = false;
      this.visibleMasculino = true;
    }
  }
}
