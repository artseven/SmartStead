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
      style({transform: 'translateY(-100%)'}),
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
  formProductName;
  newItemQuantity: number;
  newCardTitles: string[] = [];
  visible: boolean = true;

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
        });
  }

  addItem() {
      this.cartThang.createItem(this.formProductName, this.newItemQuantity)
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
      this.oneItem =
    this.cartThang.remove(itemId)
      .then(() => {
        this.routerThang.navigate(['/cart']);
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
  }
}