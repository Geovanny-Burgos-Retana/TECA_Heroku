import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-info',
  templateUrl: './reminder-info.component.html',
  styleUrls: ['./reminder-info.component.scss'],
})
export class ReminderInfoComponent implements OnInit {

  title: string = "Recordatorios";
  reminders: any = [
    {
      "reminder" : "Tarea pendiente asignatura ciencias",
    },
    {
      "reminder" : "Tarea pendiente asignatura ciencias",
    }, 
    {
      "reminder" : "Tarea pendiente asignatura ciencias",
    }
  ];


  constructor() { }

  ngOnInit() {}

}
