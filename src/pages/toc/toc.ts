import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { P1Page } from '../page1/p1';
import { P2Page } from '../page2/p2';

export class Chapter {
  id: number;
  name: string;
}

const CHAPTERS: Chapter[] = [
  { id: 1, name: 'The Sneaky iPad' },
  { id: 2, name: 'Geriatric Technology'}
];

@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html'
})

export class theTOC {
  chapters;
  nav;

  constructor(public navCtrl: NavController) {
    this.chapters = CHAPTERS;
    this.nav = navCtrl;
  }

  onSelect(chapter: Chapter): void {
    let selectedChapter = chapter.id;
    if(selectedChapter === 1) {
      this.nav.push(P1Page)
    } else if(selectedChapter === 2) {
      this.nav.push(P2Page)
    }
  }
}
