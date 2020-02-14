import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() section1: string;
  @Input() section2: string;
  @Input() section3: string;
  @Input() section4: string;
  @Input() section5: string;

  constructor() { }

  ngOnInit() {}

}
