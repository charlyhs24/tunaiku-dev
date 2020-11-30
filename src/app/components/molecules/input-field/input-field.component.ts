import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input()
  inputName: string;
  @Input()
  controlName: FormControl;
  @Input()
  placeholder: string;
  @Input()
  labelName: string;
  @Input()
  type: string;
  constructor() { }
}
