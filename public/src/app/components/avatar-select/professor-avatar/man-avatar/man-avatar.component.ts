import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Usuario } from '../../../../models/usuario';

@Component({
  selector: 'app-man-avatar',
  templateUrl: './man-avatar.component.html',
  styleUrls: ['./man-avatar.component.scss'],
})
export class ManAvatarComponent implements OnInit {
  @Input() comando: string;
  @Output() newManEvent = new EventEmitter();
  
  newUsuario = new Usuario();
  
  constructor() { }

  ngOnInit() {}

  selectAvatar(event: any) {
    this.newUsuario.avatar = event.target.value;
  }

  create() {    
    this.newManEvent.emit(this.newUsuario);
  }
}
