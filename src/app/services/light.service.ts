import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class LightService {
  baseUrl: string = environment.apiUrl;
  requestLightUrl: string = environment.requestLightUrl;
  data ;
  header: Object = 'Access-Control-Allow-Origin: *';
  // header: object = environment.headers;
  constructor(
    private httpRouter: Http
  ) { }

  // submitDimmer(data: object) {
  //       this.httpRouter.post(
  //     this.requestLightUrl, this.data,
  //     {withCredentials: true}
  //   )
  //   .toPromise()
  //   .then(res => res.json());
  // }

  // submitDimmer(message: object) {
  //   return this.httpRouter
  //     .post(
  //     this.requestLightUrl,
  //     { clipmessage: message },
  //     // { withCredentials: true }
  //     )
  //     .toPromise()
  //     .then(res => res.json());
  // }

  submitDimmer() {
    return this.httpRouter
      .post(
      this.baseUrl + '/api/lights/on',
      {}
      )
      .toPromise()
      .then(res => res.json());
  }

}
