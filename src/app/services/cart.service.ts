import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { environment } from '../../environments/environment';

@Injectable()
export class CartService {

  baseUrl: string = environment.apiUrl;

  constructor(
    private httpThang: Http
  ) { }

    shoppingItems() {
      return this.httpThang
        .get(
          this.baseUrl + '/api/cart',
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

  // createCard(listId, title) {
  //   return this.httpThang
  //     .post(
  //       `${this.baseUrl}/api/cart/`,
  //       { cardTitle: title },
  //       { withCredentials: true }
  //     )
  //     .toPromise()
  //     .then(res => res.json())
  // }

}
