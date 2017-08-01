import { Directive, ElementRef, OnDestroy, Input, forwardRef, Component, OnInit } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.css']
})


export class ACComponent implements OnInit {
  val: number = 10 + Math.random() * 20 ;
  radix: number = $('.rs-tooltip-text').html();
  string;
  constructor() { }

  ngOnInit() {
  }

 createStaff() {
  $('<div class="rs-gradient" />').insertBefore($('.rs-tooltip'));
}


 update() {
  this.val = -230 + parseInt(this.string, this.radix * 7.5);
  $('.rs-gradient').css({
    background: 'hsl(' + this.val + ', 100%, 57%)'
  });
}



$('#slider').roundSlider({
  radius: 80,
  width: 15,
  min: 68,
  max: 80,
  circleShape: "pie",
  handleSize: "+16",
  handleShape: "dot",
  sliderType: "min-range",
  startAngle: 315,
  value: val,
  editableTooltip: false,
  mouseScrollAction: true,
  change: update,
  drag: update,
  create: function () {
    createStaff();
    update();
  }

})


}
