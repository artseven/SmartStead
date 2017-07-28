import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class LightService {
  requestLightUrl: string = environment.requestLightUrl;
  argument: object;
  // header: object = environment.headers;
  constructor(
    private httpRouter: Http
  ) { }

  submitDimmer(argument: object) {
        this.httpRouter.post(
      this.requestLightUrl, this.argument 
      // this.header
    )
    .toPromise()
    .then(res => res.json());
  }
}