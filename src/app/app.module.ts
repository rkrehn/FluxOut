import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { DataProvider } from '../providers/data/data';

import { SettingsPage } from '../pages/settings/settings';
import { TipsPage } from '../pages/tips/tips';
import { WorkoutPage } from '../pages/workout/workout';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    TipsPage,
    WorkoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    TipsPage,
    WorkoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    SocialSharing     
  ]
})
export class AppModule {}
