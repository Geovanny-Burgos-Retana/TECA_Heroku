import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }

}
/*
<ion-content class="principal">
    <ion-grid>
      <ion-row >
        <ion-col class="sidebar" >
          <app-side-bar></app-side-bar>
        </ion-col>
        <ion-col class="dashboard">
          <app-dashboard></app-dashboard>
        </ion-col>
        <ion-col class="profilebar">
          <app-profile-bar></app-profile-bar>
        </ion-col>
      </ion-row>
    </ion-grid>

</ion-content>

    */