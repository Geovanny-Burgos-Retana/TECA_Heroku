import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
})
export class RecentComponent implements OnInit {
  
  title: string = "Recientes";
  text: string = "En esta sección podrás observar algunas actividades que has realizado recientemente";
  practices: any = [
    {
      "name" : "Enfermedades gástricas",
      "percentage" : 90
    },
    {
      "name" : "Enfermedades gástricas",
      "percentage" : 70
    }, 
    {
      "name" : "Enfermedades gástricas",
      "percentage" : 30
    }
  ];


  constructor() { }

  ngOnInit() {}

}
