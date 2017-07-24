import { Component, OnInit, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingItem;
  onShoppingChecked() {
    this.shoppingItem.delete();
  }
  ngOnInit(){}
}