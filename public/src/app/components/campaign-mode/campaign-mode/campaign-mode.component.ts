import { OnInit, Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-campaign-mode',
  templateUrl: './campaign-mode.component.html',
  styleUrls: ['./campaign-mode.component.scss'],
})
export class CampaignModeComponent implements OnInit {
  @ViewChild('slider', { static: true }) slider: IonSlides;
  @ViewChild('segments', { static: true }) segments;

  title: string = "Modo Campaña";
  subtitle: string = "Asignaturas";
  text: string = "El modo campaña es una sección donde sumarás experiencia al realizar las actividades que la profesora crea y así podrás adquirir conocimiento y avanzar en el ranking semanal.";
  practices: any=[];
  subjects: any=[];

  constructor() {

  }
  selectedTab(index) {
    console.log("selectedTab",index);
    // CHANGE PRACTICES VALUE HERE
  }

  ngOnInit() {
    this.practices = [
      {
        "name" : "Enfermedades gástricas",
      },
      {
        "name" : "Enfermedades gástricas",
      }, 
      {
        "name" : "Enfermedades gástricas",
      },
      {
        "name" : "Enfermedades gástricas",
      }
    ];
    this.subjects = [
      {
        "name" : "Ciencias",
      },
      {
        "name" : "Estudios Sociales",
      }, 
      {
        "name" : "Español",
      }
    ];
  }

}
