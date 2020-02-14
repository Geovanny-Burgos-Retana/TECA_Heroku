import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Usuario } from '../../../../models/usuario';

@Component({
  selector: 'app-boy-avatar',
  templateUrl: './boy-avatar.component.html',
  styleUrls: ['./boy-avatar.component.scss'],
})
export class BoyAvatarComponent implements OnInit {
  @Input() comando: string;
  @Output() newBoyEvent = new EventEmitter();

  newUsuario = new Usuario();
  
  constructor() { }

  ngOnInit() {}

  selectAvatar(event: any) {
    this.newUsuario.avatar = event.target.value;
  }

  create() {
    this.newBoyEvent.emit(this.newUsuario);
  }
}
