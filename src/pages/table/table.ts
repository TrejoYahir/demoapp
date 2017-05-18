import { CounterService } from './../../app/services/counter';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Table page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {

  counterHistory: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public counterService: CounterService, public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.counterHistory = this.counterService.getHistory(); 
  }

  deleteCounter(counter) {
    this.counterService.removeCounter(counter);
    this.counterHistory = this.counterService.getHistory();
  }

  onDelete(counter) {
    const alert = this.alertCtrl.create({
      title: 'Borrar entrada',
      message: '¿Seguro que deseas borrar la entrada?',
      buttons: [
        {
          text: 'Borrar',
          handler: () => {
            this.deleteCounter(counter);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',          
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    });

    alert.present();
  }

}
