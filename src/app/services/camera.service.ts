import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class CameraService {
  baseUrl: string = environment.apiUrl;


  constructor(
    private httpRouter: Http
  ) { }


  turnLeft () {
    return this.httpRouter
    .get(
      this.baseUrl + '/api/camera',
      { withCredentials: true}
    )
    .toPromise()
    .then(res => res.json());
  }
}
