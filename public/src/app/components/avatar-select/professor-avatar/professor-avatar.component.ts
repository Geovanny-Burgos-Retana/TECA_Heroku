import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthenticationService } from '../../../services/authentication.service';

import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-professor-avatar',
  templateUrl: './professor-avatar.component.html',
  styleUrls: ['./professor-avatar.component.scss'],
})
export class ProfessorAvatarComponent implements OnInit {
  @Input() tipo1: string;
  @Input() tipo2: string;
  @Input() comando: string;
  @Input() mensaje: string;
  @Output() newProfessorEvent = new EventEmitter();
  
  public visibleMasculino = false;
  public visibleFemenino = false;
  tipo: string;
  
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
  }

  setVisibleAvatar() {
    if (localStorage.getItem('sexo')=='Femenino'){
      this.visibleFemenino=true;
    }else {
      this.visibleMasculino=true;
    }
  }
  
  create(usuario: Usuario) {
    this.newProfessorEvent.emit(usuario);
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
