import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-service-area',
  templateUrl: './form-service-area.component.html',
  styleUrls: ['./form-service-area.component.scss']
})
export class FormServiceAreaComponent {
  @Output()
  submitEventServiceArea: EventEmitter<string>;
  serviceAreaForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
  });
  constructor() {
    this.submitEventServiceArea = new EventEmitter<string>();
  }
  onSubmit() {
    this.submitEventServiceArea.emit(this.serviceAreaForm.value.city);
  }
}
