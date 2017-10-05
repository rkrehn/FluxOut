import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipsPage } from '../tips/tips';
import { WorkoutPage } from '../workout/workout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gototips() {
    this.navCtrl.push(TipsPage);
  }

  gotostart() {
    this.navCtrl.push(WorkoutPage);
  }
}
