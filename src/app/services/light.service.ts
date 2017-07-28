import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class LightService {
  requestLightUrl: string = environment.requestLightUrl;
  body ;
  header: Object = 'Access-Control-Allow-Origin: *';
  // header: object = environment.headers;
  constructor(
    private httpRouter: Http
  ) { }

  submitDimmer(data: object) {
        this.httpRouter.post(
      this.requestLightUrl, this.body, this.header
    )
    .toPromise()
    .then(res => res.json());
  }
}