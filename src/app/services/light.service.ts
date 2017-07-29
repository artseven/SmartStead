import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class LightService {
  baseUrl: string = environment.apiUrl;

  constructor(
    private httpRouter: Http
  ) { }

  submitOff() {
    return this.httpRouter
      .post(
      this.baseUrl + '/api/lights/off',
      {}
      )
      .toPromise()
      .then(res => res.json());
  }

  submitOn() {
    return this.httpRouter
      .post(
      this.baseUrl + '/api/lights/on',
      {}
      )
      .toPromise()
      .then(res => res.json());
  }

  submitDimmer() {
    return this.httpRouter
      .post(
      this.baseUrl + '/api/lights/dimmer',
      {}
      )
      .toPromise()
      .then(res => res.json());
  }
}
