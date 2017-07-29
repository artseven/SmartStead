import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LightService } from '../services/light.service';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {
  errorMessage: string;
  myClipMessage: string;
  constructor(
    private httpLight: Http,
    private lightThing: LightService,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {

    }
  toast(input) {
    this.snackBar.open(input, '', {
      duration: 4000
    });
  }

  onOffSubmit() {
    this.lightThing.submitOff()
    .then(() => { })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
    this.toast('Turning living-room lights OFF');
  }

  onOnSubmit() {
    this.lightThing.submitOn()
      .then(() => { })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
    this.toast('Turning living-room lights ON');
  }

  onDimmerSubmit() {
    this.lightThing.submitDimmer()
      .then(() => { })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
    this.toast('Turning living-room lights ON DIMMER');
  }
}
