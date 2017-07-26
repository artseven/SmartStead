import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import { SessionService } from '../session.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  baseUrl: string = `http://usa22543.mytenvis.org/tmpfs/snap.jpg?num=`;
  currentUrl: string;
  i: number = 1;
  private timer;
  selectedIndex: number = 1;
  selectChange(): void {
    console.log('Selected INDEX: ' + this.selectedIndex);
  }

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  // Action triggered when user swipes
  swipe(selectedIndex: number, action = '') {
    // Out of range
    // if (this.selectedIndex < 0 || this.selectedIndex > 1 ) return;

    // Swipe left, next tab
    if (action === this.SWIPE_ACTION.LEFT) {
      // this.sidenav.close();
      // const isLast = this.selectedIndex === 1;
      // this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
      // console.log("Swipe right - INDEX: " + this.selectedIndex);
      console.log('SWIPED LEFT!')
    }

    // Swipe right, previous tab
    if (action === this.SWIPE_ACTION.RIGHT) {
      // this.sidenav.open();
      console.log("SWIPED RIGHT!")

    }
  }

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
     setInterval(() => {
          this.dynamicUrl();
        }, 160);
  }

  onShoppingClicked() {
    this.routerThang.navigate(['/cart'])
  }
  onCalendarClicked() {
    this.routerThang.navigate(['/calendar'])
  }

  dynamicUrl() {
       this.currentUrl = `${this.baseUrl}` + Math.random();
    //  this.i ++;
    //  console.log('URL IS' + this.currentUrl);
     return this.currentUrl;
    //  return this.url;


  }
}
