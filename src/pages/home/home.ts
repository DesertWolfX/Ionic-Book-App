import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { theTOC } from '../toc/toc';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  title = 'Tech Book';

  TOC() {
    this.nav.push(theTOC)
  }
}
