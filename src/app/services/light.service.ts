import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class LightService {
  requestLightUrl: string = environment.requestLightUrl;
  clipMessage: Object;
  constructor(
    private httpRouter: Http
  ) { }

  submitDimmer(){
    this.httpRouter.post(
      this.requestLightUrl + this.clipMessage,
      {withCredentials: true}
    )
    .toPromise()
    .then(res => res.json());
  }
}