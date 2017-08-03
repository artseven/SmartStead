import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class ThermostatService {
  baseUrl: string = environment.apiUrl;
  constructor(
    private httpRouter: Http
  ) { }

  submitThermostat() {
    return this.httpRouter
      .post(
      this.baseUrl + '/api/nest/temperature',
      {}
      )
      .toPromise()
      .then(res => res.json());
  }

}
