import { Component,
   OnInit,
   Input,
   EventEmitter,
   ElementRef,
   OnChanges,
   IterableDiffers,
   SimpleChanges } from '@angular/core';
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
      animate(250)
    ]),
    transition(':leave', [
      group([
        animate('0.4s ease', style({
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
  items;
  myItems;
  errorMessage;
  newItemName: string;
  formProductName;
  formProductQuantity: number;
  newItemQuantity: number;
  newCardTitles: string[] = [];
  visible: boolean = true;
  iterableDiffer;
  changes;
  simpleChanges;
  constructor(
    private cartThang: CartService,
    private routerThang: Router,
    private _iterableDiffers: IterableDiffers,
  ) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges called!');
  //   console.log(changes);
  // }
  ngOnInit() {
      this.cartThang.shoppingItems()
        .then((itemsFromApi) => {
            this.myItems = itemsFromApi;
            console.log('ID of the last element in array' + itemsFromApi[itemsFromApi.length]._id);
        })
        .catch((errResponse) => {
        });
        setInterval(() => {
          this.update();
        }, 500);
  }


  // ngDoCheck() {
  //     const changes = this.iterableDiffer.diff(this.myItems);
  //     console.log("SIMPLE CHANGE" + changes)
  //     if (changes) {
  //         console.log('Changes detected!'+ changes);
  //         // this.myItems.push(changes.additions)
  //     }
  // }
  // }


    addItem() {
      this.cartThang.createItem(this.formProductName, this.formProductQuantity)
        .then((newCartFromApi) => {
            this.myItems.unshift(newCartFromApi);
            this.formProductName = '';
            this.formProductQuantity = 0;
        })
        .catch((errResponse) => {
            alert('Item create error 🐋');
        });
          this.routerThang.navigate(['/cart']);
  }

    deleteItem(itemId) {
    this.cartThang.remove(itemId)
      .then(() => {
        this.routerThang.navigate(['cart']);
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
  }

  update() {
    this.cartThang.shoppingItems()
    .then( fetchedData => { 
      if (JSON.stringify(this.myItems) != JSON.stringify(fetchedData)) {
        this.myItems = fetchedData
      }
    })
    .catch(err => console.log(err));
  }
}
