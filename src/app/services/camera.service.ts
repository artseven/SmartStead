import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class CameraService {
  baseUrl: string = environment.apiUrl;
  requestUrl: string = environment.requestUrl;

  constructor(
    private httpRouter: Http
  ) { }


  turnLeft () {
    this.httpRouter
    .get(
      this.requestUrl + 'left&-speed=45',
      { withCredentials: true}
    )
    .toPromise()
    .then(res => res.json());
  }

  turnRight () {
    this.httpRouter
    .get(
      this.requestUrl + 'right&-speed=45',
      { withCredentials: true}
    )
    .toPromise()
    .then(res => res.json());
  }

  turnDown () {
    this.httpRouter
    .get(
      this.requestUrl + 'down&-speed=45',
      { withCredentials: true}
    )
    .toPromise()
    .then(res => res.json());
  }
  turnUp () {
    this.httpRouter
    .get(
      this.requestUrl + 'up&-speed=45',
      { withCredentials: true}
    )
    .toPromise()
    .then(res => res.json());
  }
}
