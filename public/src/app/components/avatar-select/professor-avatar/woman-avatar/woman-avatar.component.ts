import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Usuario } from '../../../../models/usuario';

@Component({
  selector: 'app-woman-avatar',
  templateUrl: './woman-avatar.component.html',
  styleUrls: ['./woman-avatar.component.scss'],
})
export class WomanAvatarComponent implements OnInit {
  @Input() comando: string;
  @Output() newWomanEvent = new EventEmitter();

  newUsuario = new Usuario();
  
  constructor() { }

  ngOnInit() {}
  
  selectAvatar(event: any) {
    this.newUsuario.avatar = event.target.value;
  }

  create() {    
    this.newWomanEvent.emit(this.newUsuario);
  }
}
