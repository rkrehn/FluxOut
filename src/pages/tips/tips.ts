import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { WorkoutPage } from '../workout/workout';

@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  gotoWorkout() {
    this.navCtrl.push(WorkoutPage);
  }

  nexttips() {

  }
  backtips() {

  }
}
