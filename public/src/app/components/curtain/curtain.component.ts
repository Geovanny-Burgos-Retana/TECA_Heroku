import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.scss'],
})
export class CurtainComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goTo(){
    this.navCtrl.navigateForward('/registro');
  }

}
