import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LightService } from '../services/light.service';


@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {

  constructor(
    private httpLight: Http,
    private lightThing: LightService
  ) { }

  ngOnInit() {

    }

  // onDimmerSubmit(){
  //   this.httpLight.post(

  //   )

  // }

}
