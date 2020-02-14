import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {

  title: string = "Logros";
  text: string = "En esta sección podrás ver tus logros en los cursos. Completa actividades y ganarás más";
  achievements: any = [/*
    {
      "task" : "Completar 3 actividades"
    },
    {
      "task" : "Primero en el ranking"
    }, 
    {
      "task" : "Completar 2 cursos exitosamente"
    }*/
  ];
  constructor() { }

  ngOnInit() {}

}
