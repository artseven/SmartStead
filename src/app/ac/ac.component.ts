import { Input, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.css']
})


export class ACComponent implements OnInit {
  errorMessage: string;
  toast;
  constructor() { }

  ngOnInit() {
  }

  onThermostatSubmit() {
    this.thermostatThing.submitOff()
      .then(() => { })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
    this.toast('Turning living-room lights OFF');
  }

}
