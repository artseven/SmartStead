import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {

  constructor(
    private httpLight: Http
  ) { }

  ngOnInit() {
   
  }

  onDimmerSubmit(){

  }

}
