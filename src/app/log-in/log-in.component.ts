import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formEmail: string;
  formPassword: string;

  errorMessage: string;

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  submitLogin() {
      this.sessionThang.login(this.formEmail, this.formPassword)
        .then((userFromApi) => {
            this.routerThang.navigate(['/home']);
            
            this.sessionThang.loggedIn(userFromApi);
        })
        .catch((errResponse) => {
            const apiInfo = errResponse.json();
            this.errorMessage = apiInfo.message;
        });
  }
}
