import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 animations: [
  trigger('itemAnim', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(550)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ]),
]
})

export class ShoppingListComponent implements OnInit {
  oneItem: Object;
  myItems;
  errorMessage;
  newItemName: string;
  newItemQuantity: number;
  newCardTitles: string[] = [];

  constructor(
    private cartThang: CartService,
    private routerThang: Router
  ) { }

  ngOnInit() {
      this.cartThang.shoppingItems()
        .then((itemsFromApi) => {
            this.myItems = itemsFromApi;
            console.log('ID of the first element in array' + itemsFromApi[0]._id);
        })
        .catch((errResponse) => {
            alert('Items error 🐋');
        });
  }

  addItem() {
      this.cartThang.createItem(this.newItemName, this.newItemQuantity)
        .then((newCartFromApi) => {
            this.myItems.push(newCartFromApi);
            this.newItemName = '';
            this.newItemQuantity = 0 ;
        })
        .catch((errResponse) => {
            alert('Item create error 🐋');
        });
  }

    deleteItem(itemId) {

    this.cartThang.remove(itemId)
      .then(() => {
        this.routerThang.navigate(['/cart']);
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
  }
}