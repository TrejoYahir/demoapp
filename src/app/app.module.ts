import { SettingsService } from './services/settings';
import { CounterService } from './services/counter';
import { TablePage } from './../pages/table/table';
import { TimerPage } from './../pages/timer/timer';
import { SettingsPage } from './../pages/settings/settings';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SettingsPage,
    TimerPage,
    TablePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SettingsPage,
    TimerPage,
    TablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CounterService,
    SettingsService
  ]
})
export class AppModule {}
