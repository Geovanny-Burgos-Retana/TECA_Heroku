import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtema',
  templateUrl: './subtema.component.html',
  styleUrls: ['./subtema.component.scss'],
})
export class SubtemaComponent implements OnInit {

  subject: string = "Ciencias";
  theme: string = "Sistema Digestivo";
  
  constructor() { }

  ngOnInit() {}

}
