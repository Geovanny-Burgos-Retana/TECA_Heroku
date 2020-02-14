import { Component, OnInit, Input } from '@angular/core';

import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {

  title: string = "Datos personales";

  constructor(
    public authenticationService: AuthenticationService
  ) {
    
  }

  ngOnInit() {
    
  }

  /**
   * Convierte de un string de fecha nacimiento a la edad
   * @param birthday string de fecha nacimiento con formato yyyy-mm-ddThh:mm:sssZ
   */
  calculateAge(birthday: string) { // birthday is a date
    const result = Math.abs(new Date(Date.now() - new Date(birthday).getTime()).getUTCFullYear() - 1970).toString();
    return (result == '1') ? (result + " año") : (result + " años");
}
}
