import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-recent',
  templateUrl: './dashboard-recent.component.html',
  styleUrls: ['./dashboard-recent.component.scss'],
})
export class DashboardRecentComponent implements OnInit {

  constructor(
  ) { }
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

  ngOnInit() {}

}
