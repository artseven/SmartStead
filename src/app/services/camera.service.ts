import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class CameraService {
  baseUrl: string = environment.apiUrl;
  message: string;

  constructor(
    private httpRouter: Http
  ) { }


  turnLeft () {
    this.httpRouter
    .post(
      this.baseUrl + '/api/camera/left',
      {}
    )
    .toPromise()
    .then(res => res.json());
  }

  turnRight () {
    this.httpRouter
    .post(
      this.baseUrl + '/api/camera/right',
      {}
    )
    .toPromise()
    .then(res => res);
  }

  turnDown () {
    this.httpRouter
    .post(
      this.baseUrl + '/api/camera/down',
      {}
    )
    .toPromise()
    .then(res => res);
  }

  turnUp () {
    this.httpRouter
    .post(
      this.baseUrl + '/api/camera/up',
      {}
    )
    .toPromise()
    .then(res => res);
  }
}
