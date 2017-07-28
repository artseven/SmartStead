import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LightService } from '../services/light.service';


@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {
  clipMessage: Object = {
    bridgeId: '001788fffe4c72e9', clipCommand: {
      url:
      '/api/0/groups/0/action', method: 'PUT', body:
      { 'on': false, 'bri': 100 }
    }
  }
  constructor(
    private httpLight: Http,
    private lightThing: LightService
  ) { }

  ngOnInit() {

    }

  onDimmerSubmit(){
    this.lightThing.submitDimmer(this.clipMessage)

  }

}
