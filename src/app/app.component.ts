import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public auth: AuthService) {
     auth.handleAuthentication();
  }

}
