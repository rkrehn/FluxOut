import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
  }
  goBack() {
    this.navCtrl.pop();
  }
  share() {
    this.socialSharing.share('Fluxout App');
  }

}
