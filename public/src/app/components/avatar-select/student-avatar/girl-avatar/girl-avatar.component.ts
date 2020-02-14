import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Usuario} from '../../../../models/usuario';

@Component({
  selector: 'app-girl-avatar',
  templateUrl: './girl-avatar.component.html',
  styleUrls: ['./girl-avatar.component.scss'],
})
export class GirlAvatarComponent implements OnInit {
  @Input() comando: string;
  @Output() newGirlEvent = new EventEmitter();

  newUsuario = new Usuario();

  constructor() { }

  ngOnInit() {}

  selectAvatar(event: any) {
    this.newUsuario.avatar = event.target.value;
  }

  create() {
    this.newGirlEvent.emit(this.newUsuario);
  }
}
