import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x: number = 0;
y: number = 0;
startX: number = 0;
startY: number = 0;

onPanStart(event: any): void {
  event.preventDefault();
  this.startX = this.x;
  this.startY = this.y;
}

onPan(event: any): void {
  event.preventDefault();
  this.x = this.startX + event.deltaX;
  this.y = this.startY + event.deltaY;
}
  constructor() {

  }
}
