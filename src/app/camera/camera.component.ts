import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular/material';


import { CameraService } from '../services/camera.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  errorMessage;
  constructor(
    private cameraService: CameraService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // onOffSubmit() {
  //   this.lightThing.submitOff()
  //     .then(() => { })
  //     .catch((err) => {
  //       this.errorMessage = 'Could not retrieve item details. Try again later.';
  //     });
  //   this.toast('Turning living-room lights OFF');
  // }

  onLeftClicked() {
    this.cameraService.turnLeft()
    .then(() => {} )
    .catch((err) => {
      this.errorMessage = 'Could not retrieve item details. Try again later.';
  });
  }

    onRightClicked() {
      this.cameraService.turnRight()
        .then(() => { })
        .catch((err) => {
          this.errorMessage = 'Could not retrieve item details. Try again later.';
        });
    }

    onDownClicked() {
      this.cameraService.turnDown()
        .then(() => { })
        .catch((err) => {
          this.errorMessage = 'Could not retrieve item details. Try again later.';
        });
    }

    onUpClicked() {
      this.cameraService.turnUp()
        .then(() => { })
        .catch((err) => {
          this.errorMessage = 'Could not retrieve item details. Try again later.';
        });
    }

  // onToggleClicked() {
  //   this.router.navigate(['/device-camera']);
  // }
}
