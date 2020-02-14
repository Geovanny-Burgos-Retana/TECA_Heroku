import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-ranking',
  templateUrl: './dashboard-ranking.component.html',
  styleUrls: ['./dashboard-ranking.component.scss'],
})
export class DashboardRankingComponent implements OnInit {

  students: any = [
    {
      "name" : "Fernanda Madrigal Cordero",
      "percentage" : 97
    },
    {
      "name" : "Ana Peréz Briceño",
      "percentage" : 88
    }, 
    {
      "name" : "Carlos Mata Masís",
      "percentage" : 70
    },
    {
      "name" : "Rebeca Castro Figueroa",
      "percentage" : 65
    },
    {
      "name" : "Vanesa Brenes Villalobos",
      "percentage" : 60
    },
    {
      "name" : "Camila Leiva Ugalde",
      "percentage" : 50
    }
  ];

  constructor() { }
  
  ngOnInit() {}

  getTop(i: any) {
    console.log(i);
    return 39+i*17+i*12; 
  }
  getTopLine(i: any) {
    console.log(i);
    return 44+i*17+i*12; 
  }
}