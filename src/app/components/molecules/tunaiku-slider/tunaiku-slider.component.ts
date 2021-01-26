import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tunaiku-slider',
  templateUrl: './tunaiku-slider.component.html',
  styleUrls: ['./tunaiku-slider.component.scss']
})
export class TunaikuSliderComponent {
  @Input()
  topLabelName: string;
  @Input()
  topLabelValue: string;
  @Input()
  controlName: FormControl;
  @Input()
  minVal: string;
  @Input()
  maxVal: string;
  @Input()
  minSlider: number;
  @Input()
  maxSlider: number;
  constructor() {
  }
}
