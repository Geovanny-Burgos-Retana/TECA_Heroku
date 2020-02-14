import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() opcion1: string;
  @Input() opcion2: string;
  @Input() opcion3: string;
  @Input() opcion4: string;
  @Input() opcion5: string;
  @Input() selectedOption: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goPanel(){
    this.selectedOption = this.opcion1;
    this.navCtrl.navigateForward('/panel');
  }
  goCampania(){
    this.selectedOption = this.opcion2;
    this.navCtrl.navigateForward('/inicio');
  }
  goLibre(){
    this.selectedOption = this.opcion3;
    this.navCtrl.navigateForward('/registro');
  }
  goFichas(){
    this.selectedOption = this.opcion4;
    this.navCtrl.navigateForward('/panel');
  }
  goConfiguraciones(){
    this.selectedOption = this.opcion5;
    this.navCtrl.navigateForward('/panel');
  }

  /*
  hover(element) {
    element.setAttribute('src', 'assets/icon/menu/dashboardColor.png');
  }
  
  unhover(element) {
    element.setAttribute('src', 'assets/icon/menu/dashboardColor.png');
  }
  */

}
