import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Estudiante } from '../../../models/estudiante';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  @Input() nombre: string;
  @Input() genero1: string;
  @Input() genero2: string;
  @Input() fecha: string;
  @Input() gradoCurso: string;
  @Input() email: string;
  @Input() institucion: string;
  @Input() password: string;
  @Input() botonRegistro: string;
  @Input() botonLogin: string;
  @Output() createNewStudentEvent = new EventEmitter();
  @Output() dataColected = new EventEmitter<boolean>();
  newEstudiante = new Estudiante();
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  setNombre(event: any) {
    this.newEstudiante.nombre = event.target.value;
  }

  setSexo(event: any) {
    this.newEstudiante.sexo = event.target.value;

  }

  setFechaNacimiento(event: any) {
    this.newEstudiante.fechaNacimiento = event.target.value;
  }

  setGradoCurso(event: any) {
    this.newEstudiante.grado = event.target.value;
  }

  setEmail(event: any) {
    localStorage.setItem('email', event.target.value);
  }

  setInstitucion(event: any) {
    this.newEstudiante.institucion = event.target.value;
  }

  setPassword(event: any) {
    localStorage.setItem('password', event.target.value);
  }

  /**
   * Llama a las funcion liga a ella en el componente padre para que se encargue del registro del estudiante y su respetivo usuario
   */
  create() {
    delete this.newEstudiante._id;
    this.createNewStudentEvent.emit(this.newEstudiante);
    this.newEstudiante = new Estudiante();
    this.dataColected.emit(true);
  }

  /**
   * Lleva a la pantalla de inicio cuando se clickea el botón de iniciar sesión
   */
  goToInicio() {
    this.navCtrl.navigateForward('/inicio');
  }

}
