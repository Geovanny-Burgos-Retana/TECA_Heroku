import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  notifications: any = [
    {
      "date" : "Hoy, 09 noviembre  2019",
      "activities" : [
        
      ],
      "notes" : [
        { "name": "Enfermedades gástricas." }
      ],
    },
    {
      "date" : "Ayer, 08 noviembre 2019",
      "activities" : [
        { "name": "Sinónimos y antónimos" }
      ],
      "notes" : [
        { "name": "Sinónimos y antónimos" }
      ],
    },
    {
      "date" : "Viernes, 25 octubre 2019",
      "activities" : [
        { "name": "Enfermedades gástricas." }
      ],
      "notes" : [
        
      ],
    }, 
    
  ];

  @Input() titulo: string;
  constructor() { }

  ngOnInit() {}

}
