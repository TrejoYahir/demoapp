import { Component } from '@angular/core';

import { TimerPage } from '../timer/timer';
import { TablePage } from '../table/table';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimerPage;
  tab2Root = TablePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
