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

  constructor(
    private router: Router,
    private sessionThang: SessionService,
    private routerThang: Router,
  ) { }

  ngOnInit() {
  }

  btnClick= function () {
        this.router.navigate(['/login']);
  };


}
