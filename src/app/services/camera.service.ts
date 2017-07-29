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
    return this.httpRouter
    .post(
      this.baseUrl + '/api/camera/left',
      {username: 'admin', password: 'tenvis1@'},
      {withCredentials: true}
    )
    .toPromise()
    .then(res => res);
  }

  turnRight () {
    return this.httpRouter
    .post(
      this.baseUrl + '/api/camera/right',
      {withCredentials: true}
    )
    .toPromise()
    .then(res => res);
  }

  turnDown () {
   return this.httpRouter
    .post(
      this.baseUrl + '/api/camera/down',
      {withCredentials: true}
    )
    .toPromise()
    .then(res => res);
  }

  turnUp () {
    return this.httpRouter
    .post(
      this.baseUrl + '/api/camera/up',
      {withCredentials: true}
    )
    .toPromise()
    .then(res => res);
  }
}
