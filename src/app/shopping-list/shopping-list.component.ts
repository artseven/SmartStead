import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { FormControl } from '@angular/forms';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 animations: [
  trigger('itemAnim', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
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
  ])
]
})

export class ShoppingListComponent implements OnInit {
  myLists: any[] = [];

  newListTitle: string;

  newCardTitles: string[] = [];

  constructor(
    private cartThang: CartService
  ) { }

  ngOnInit() {
      this.cartThang.shoppingitems()
        .then((listsFromApi) => {
            this.myLists = listsFromApi;
        })
        .catch((errResponse) => {
            alert('List error 🐋');
        });
  }

  makeAList() {
      this.listThang.createList(this.newListTitle)
        .then((newListFromApi) => {
            this.myLists.push(newListFromApi);
            this.newListTitle = '';
        })
        .catch((errResponse) => {
            alert('List create error 🐋');
        });
  }

  makeACard(theList, titleIndex) {
      const theTitle = this.newCardTitles[titleIndex];

      this.cardThang.createCard(theList._id, theTitle)
        .then((newCardFromApi) => {
            theList.cards.push(newCardFromApi);
            this.newCardTitles[titleIndex] = '';
        })
        .catch((errResponse) => {
            alert('Card create error 🐋');
        });
  }
}