import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
@Injectable()
export class LightService {
  requestLightUrl: string = environment.requestLightUrl;

  constructor(
    private httpRouter: Http
  ) { }
  

  