import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular/material';


import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor(
    private cameraService: CameraService
  ) { }

  ngOnInit() {
  }

  onLeftClicked() {
    this.cameraService.turnLeft();
  }
  onRightClicked() {
    this.cameraService.turnRight();
  }

  onDownClicked() {
    this.cameraService.turnDown();
  }

  onUpClicked() {
    this.cameraService.turnUp();
  }
}
