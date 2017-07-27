// our root app component
import { ViewChild, ViewChildren, Component, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-device-camera',
  template: './device-camera.html'
})
export class DeviceCameraComponent {
  @ViewChild('myname') input: ElementRef;
  @ViewChild('video') video: any;

  @ViewChildren('div1,div2,div3') divs: QueryList<ElementRef>;
  // video: ElementRef;

  ngAfterViewInit() {

    const _video = this.video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          _video.src = window.URL.createObjectURL(stream);
          _video.play();
        })
    }

  }

}
