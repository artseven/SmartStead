import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  btnClick= function () {
        this.routerThang.navigate(['/login']);
  };

  homeClicked = function () {
        this.routerThang.navigate(['/home']);
  };


  constructor(
    private sessionThang: SessionService,
    private routerThang: Router,
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

  logMeOut() {
      this.sessionThang.logout()
        .then(() => {
            this.routerThang.navigate(['/login']);
            this.isLoggedIn = false;
        })
        .catch((err) => {
            this.isLoggedIn = true;
            console.log('Something is wrong with log out');
            console.log(err);
        });
  }

  handleLogin(userFromApi) {
      this.isLoggedIn = true;
  }


}
