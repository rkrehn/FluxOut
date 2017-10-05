import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Subscription } from "rxjs";
import { SettingsPage } from '../settings/settings';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage {
  @ViewChild('videoGif') video: ElementRef;

  workouts = [];

  currentWorkout = {
    gif: '',
    description: '',
    index: 0
  };

  videoStatus = 'learn';
  secLeft = 0;

  timeSub: Subscription = Observable.of('').subscribe();

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public ngZone: NgZone, private socialSharing: SocialSharing) {
    this.workouts = data.getValues();
    this.currentWorkout = this.workouts[0];
    this.currentWorkout.index = 0;
    this.learn();
  }

  ionViewDidLoad() {
    this.video.nativeElement.play();
  }

  share() {
    this.socialSharing.share('Fluxout App', this.currentWorkout.description, this.currentWorkout.gif);
  }
  
  goBack() {
    this.navCtrl.pop();
  }

  openSettings() {
    this.navCtrl.push(SettingsPage);
  }

  lastVideo() {
    if (this.currentWorkout.index == 0) {
    }
    else {
      this.timeSub.unsubscribe();
      this.ngZone.run(() => {
        this.currentWorkout.description = this.workouts[this.currentWorkout.index - 1].description;
        this.currentWorkout.gif = this.workouts[this.currentWorkout.index - 1].gif;
        this.currentWorkout.index = this.currentWorkout.index - 1;
        this.learn();
      });
    }
  }


  pauseVideo() {
    this.video.nativeElement.pause();
  }

  nextVideo() {
    if (this.currentWorkout.index + 1 == this.workouts.length) {
      this.timeSub.unsubscribe();
      this.videoStatus = 'completed';
      this.video.nativeElement.pause();
    }
    else {
      this.timeSub.unsubscribe();
      this.ngZone.run(() => {
        this.currentWorkout.description = this.workouts[this.currentWorkout.index + 1].description;
        this.currentWorkout.gif = this.workouts[this.currentWorkout.index + 1].gif;
        this.currentWorkout.index = this.currentWorkout.index + 1;
        this.learn();
      });
    }
    console.log(this.currentWorkout);
  }


  workout() {
    let foo = [];
    this.videoStatus = 'workout';
    for (let i = 60; i >= 0; i--) {
      foo.push(i);
    }
    this.secLeft = 60;
    this.timeSub.unsubscribe();
    this.timeSub = Observable.interval(1000).take(foo.length).map(t => foo[t]).subscribe((t) => {
      this.secLeft = t;
      if (t == 0) {
        this.timeSub.unsubscribe();
        this.nextVideo();
      }
    });
  }
  learn() {
    let foo = [];
    this.videoStatus = 'learn';
    for (let i = 15; i >= 0; i--) {
      foo.push(i);
    }
    this.secLeft = 15;
    this.timeSub.unsubscribe();
    this.timeSub = Observable.interval(1000).take(foo.length).map(t => foo[t]).subscribe((t) => {
      this.secLeft = t;
      if (t == 0) {
        this.timeSub.unsubscribe()
        this.workout()
      };
    });
  }

  nextSeries() {
    this.workouts = this.data.getValues();
    this.currentWorkout = this.workouts[0];
    this.currentWorkout.index = 0;
    this.learn();
  }
  repeatSeries() {
    this.timeSub.unsubscribe();
    this.ngZone.run(() => {
      this.currentWorkout.description = this.workouts[0].description;
      this.currentWorkout.gif = this.workouts[0].gif;
      this.currentWorkout.index = 0;
      this.learn();
    });
  }
}
