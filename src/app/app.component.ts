import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MdDialog} from '@angular/material';
import { SessionService } from './session.service';
import { DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  constructor(
    private sessionThang: SessionService,
    private routerThang: Router,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
      this.sessionThang.loggedIn$.subscribe((userFromApi) => {
          this.isLoggedIn = true;
      });

      this.sessionThang.checkLogin()
        // if logged in, redirect to /home
        .then((userInfo) => {
            this.routerThang.navigate(['/home']);
            this.isLoggedIn = true;
        })
        // else redirect to /
        .catch((err) => {
            this.routerThang.navigate(['/']);
        });
      }
  openDialog() {
      this.dialog.open(DialogComponent);
  }

  logMeOut() {
      this.sessionThang.logout()
        .then(() => {
            this.routerThang.navigate(['/']);
            this.isLoggedIn = false;
        })
        .catch(() => {});
  }

  handleLogin(userFromApi) {
      this.isLoggedIn = true;
  }
}
