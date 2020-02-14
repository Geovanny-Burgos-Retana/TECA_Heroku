import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

import { DocenteService } from '../../services/docente.service';
import { EstudianteService } from '../../services/estudiante.service';
import { UsuarioService } from '../../services/usuario.service';
import { AuthenticationService, TokenResponse } from '../../services/authentication.service';

import { Docente } from '../../models/docente';
import { Estudiante } from '../../models/estudiante';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  @Input() titulo: string;
  @Input() tipo1: string;
  @Input() tipo2: string;
  @Output() newAvatarEvent = new EventEmitter();
  public visibleProfessor = false;
  public visibleStudent = true;
  docentes: Docente[] = [];
  idUsuario: string;

  docentePrueba = new Docente();
  dataColected: boolean = false;

  constructor(
    private navCtrl: NavController,
    private docenteService: DocenteService,
    private estudianteService: EstudianteService,
    private usuarioService: UsuarioService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  selectForm(event: any) {
    this.newAvatarEvent.emit(event);
    this.setVisible();
  }

  /**
   * Registro del docente y su cuenta de usuario con las credenciales para hacer login en el sistema
   * @param newDocente Objeto Docente con los datos obtenidos del form que viene del componente professor-form
   */
  create(newDocente: Docente) {
    this.docenteService.createDocente(newDocente)
    .then(docente => {
      console.log(docente);
      const newUsuario = new Usuario();
      delete newUsuario._id;
      newUsuario.idUsuario = docente._id;
      newUsuario.email = localStorage.getItem('email'); localStorage.removeItem('email');
      newUsuario.password = localStorage.getItem('password'); localStorage.removeItem('password');
      newUsuario.tipo = "Docente";
      this.usuarioService.createUser(newUsuario)
      .then((data: TokenResponse) => {
        this.authenticationService.saveToken(data.token);
        console.log("Detalles de usuario (token) => \n", this.authenticationService.getUserDetails());
        this.gotoAvatar();
      })
      .catch(err => {
        console.log("Error creando usuario => ", err);
        this.docenteService.deleteDocente(docente._id)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      })
    })
    .catch(err => {      
      console.log("Error creando docente => ", err);
    });
  }

  /**
   * Registro del estudiante y su cuenta de usuario con las credenciales para hacer login en el sistema
   * @param newEstudiante Objeto Estudiante con los datos obtenidos del form que viene del componente student-form
   */
  createStudent(newEstudiante: Estudiante) {
    this.estudianteService.createEstudiante(newEstudiante)
    .then(estudiante => {
      const newUsuario = new Usuario();
      delete newUsuario._id;
      newUsuario.idUsuario = estudiante._id;
      newUsuario.email = localStorage.getItem('email'); localStorage.removeItem('email');
      newUsuario.password = localStorage.getItem('password'); localStorage.removeItem('password');
      newUsuario.tipo = "Estudiante";
      this.usuarioService.createUser(newUsuario)
      .then((data: TokenResponse) => {        
        this.authenticationService.saveToken(data.token);
        console.log("Detalles de usuario (token) => \n", this.authenticationService.getUserDetails());
        this.gotoAvatar();
      })
      .catch(err => {
        console.log("Error creando usuario => ", err);
        this.estudianteService.deleteEstudiante(estudiante._id)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      })
    })
    .catch(err => {
      console.log("Error creando estudiante => ", err);
    })
  }
  /* En este caso el status es el id que se almaceno
  create(docente: Docente) {
    console.log('register-form-component createDocente');
    console.log(docente);
    this.docenteService.createDocente(docente)
    .then(status => {localStorage.setItem('id', status.toString()); })
    .catch(err => console.log(err));
    localStorage.setItem('sexo', docente.sexo);
    localStorage.setItem('tipo', 'Docente');
    // console.log(this.idUsuario);
    this.gotoAvatar();
  }

  createStudent(estudiante: Estudiante) {
    console.log('register-form-component createStudent');
    console.log(estudiante);
    this.estudianteService.createEstudiante(estudiante)
    .then(status => {localStorage.setItem('id', status.toString()); })
    .catch(err => console.log(err));
    localStorage.setItem('sexo', estudiante.sexo);
    localStorage.setItem('tipo', 'Estudiante');
    this.gotoAvatar();
  }*/

  /**
   * ???
   */
  setVisible() {
    if (this.visibleStudent === false) {
      this.visibleStudent = true;
      this.visibleProfessor = false;
    } else {
      this.visibleStudent = false;
      this.visibleProfessor = true;
    }
  }

  /**
   * Meto que si el registro del Docente/Estudiante y su usuario son exitoso pasan a la pagina de escogencia del avatar para su cuenta
   */
  gotoAvatar() {
    this.navCtrl.navigateForward('/avatar');
  }

  setDataColected(colected: boolean) {
    this.dataColected=colected; 
  }
}
