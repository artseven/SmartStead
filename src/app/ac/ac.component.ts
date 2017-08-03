import { Input, Component, OnInit } from '@angular/core';
import { ThermostatService } from '../services/thermostat.service';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.css']
})


export class ACComponent implements OnInit {
  errorMessage: string;
  temperature: Object;
  constructor(
    private thermostatThing: ThermostatService,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.thermostatThing.getThermostat()
      .then((currentTemp) => {
        this.temperature = currentTemp;
        console.log(currentTemp);
        // console.log('ID of the last element in array' + itemsFromApi[itemsFromApi.length]._id);
      })
      .catch((errResponse) => {
      });
  }

  onTemperatureSubmit() {
    this.thermostatThing.submitThermostat()
      .then(() => { })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
    this.toast('Temperature has changed');
  }

  onGetSubmit() {
    this.thermostatThing.getThermostat()
      .then(() => { })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve item details. Try again later.';
      });
    this.toast('Fetching NEST info');
  }


  toast(input) {
    this.snackBar.open(input, 'close', {
      duration: 5000
    });
  }

}
