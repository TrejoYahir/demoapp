import { SettingsService } from './../../app/services/settings';
import { CounterService } from './../../app/services/counter';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Timer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {

  seconds: Array<number> = [];
  second: number = 1;
  isPlaying: boolean = false;
  timer: any;
  animationDuration: any;
  counterHistory: Array<any>;
  lastId: number;
  counterObject: any;
  lastDuration: number;
  altBackground: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public counterService: CounterService, public settingsService: SettingsService,
              public toasterController: ToastController) {    
    
    for(var _i=1; _i<=60; _i++) {
      this.seconds.push(_i);
    }
    
  }

  ionViewWillEnter() {
    this.counterHistory = this.counterService.getHistory(); 
    this.lastId = this.getLastId();
    this.altBackground = this.checkAltBackground();
  }

  showToast() {
    let toast = this.toasterController.create({
      message: "Contador registrado",
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  checkAltBackground() {
    return this.settingsService.isAltBackground();
  }

  getLastId() {
    if(this.counterHistory.length == 0) {
      this.lastId = 0;
    } else {
      this.lastId = this.counterHistory[this.counterHistory.length - 1].id;
    }
    return this.lastId;
  }

  newCounterObject(duration, state) {
    this.counterObject = {
      id: this.getLastId() + 1,
      duration: duration,
      state: state
    };
    return this.counterObject;
  }

  addToHistory(duration, state) {
    this.counterObject = this.newCounterObject(duration, state);
    this.counterService.addCounter(this.counterObject);
    this.counterHistory = this.counterService.getHistory();
    this.showToast();
  }

  setTimer(second) {
    this.second = second;
  }

  adjustTimer($event) {
    console.log($event); 
    if($event.direction == 2) {
      this.second = this.getNextSecond();
    }
    if($event.direction == 4) {
      this.second = this.getPreviousSecond();
    }   
  }

  getCurrentSecond() {
    return this.second;
  }

  getPreviousSecond() {
    if(this.second==1) {
      return 60;
    }
    return this.second - 1;
  }

  getNextSecond() {
    if(this.second==60) {
      return 1;
    }
    return this.second + 1;
  }

  setAnimationDuration() {
    if(!this.isPlaying) {
      this.animationDuration = this.getCurrentSecond()/2 + "s";
    }
    else {
      this.animationDuration = "0.5s";
    }
  }

  startCountdown() {

    this.setAnimationDuration();

    if(this.isPlaying) {
      this.isPlaying = false;
      this.addToHistory(this.lastDuration, false);
      clearInterval(this.timer);
    }

    else {
      this.lastDuration = this.getCurrentSecond();
      this.isPlaying = true;      
      this.timer = setInterval(() => {
        if(this.second != 1) {
          this.second -=  1;
        } else {
          this.animationDuration = "0.5s";
          this.isPlaying = false;
          this.addToHistory(this.lastDuration, true);          
          clearInterval(this.timer);
        }
      }, 500);
    }   
  }

}
