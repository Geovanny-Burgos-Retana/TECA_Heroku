import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-achievements',
  templateUrl: './dashboard-achievements.component.html',
  styleUrls: ['./dashboard-achievements.component.scss'],
})
export class DashboardAchievementsComponent implements OnInit {

  achievements: any = [
    {
      "name" : "Persistente",
      "task" : "Completar 3 actividades"
    },
    {
      "name" : "Ganador",
      "task" : "Primero en el ranking"
    }, 
    {
      "name" : "Excelencia",
      "task" : "Completar 2 cursos exitosamente"
    }
  ];

  constructor() { }

  ngOnInit() {}

}