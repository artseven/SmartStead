import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  okText;
  cancelText;
  valueEmitted;

  constructor() {
     this.okText = 'OK';
     this.cancelText = 'Cancel';
    }
    emitValue(value) {
     this.valueEmitted.emit(value);
  }

  ngOnInit() {
  }

}
