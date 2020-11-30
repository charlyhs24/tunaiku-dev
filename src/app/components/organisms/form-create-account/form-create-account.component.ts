import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateAccount } from 'src/app/services/loan/loan-state';
@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss']
})
export class FormCreateAccountComponent implements OnInit {
  @Output() submitEvent: EventEmitter<ICreateAccount>;
  createAccountForm = new FormGroup({
    fullName: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[A-Za-z -]+$')
      ]),
    numberOfKTP: new FormControl('',
      [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        Validators.pattern('^[0-9]+$')
      ]),
    phoneNumber: new FormControl('',
      [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        Validators.pattern('^[0-9]+$')
      ]),
    mediaSource: new FormControl('', Validators.required)
  });
  constructor() {
    this.submitEvent = new EventEmitter<ICreateAccount>();
  }
  get fullName() {
    return this.createAccountForm.get('fullName');
  }
  get numberOfKTP() {
    return this.createAccountForm.get('numberOfKTP');
  }
  get phoneNumber() {
    return this.createAccountForm.get('phoneNumber');
  }
  get mediaSource() {
    return this.createAccountForm.get('mediaSource');
  }
  ngOnInit() {
  }
  onSubmit() {
    this.submitEvent.emit({
      fullName: this.createAccountForm.value.fullName,
      mediaSource: this.createAccountForm.value.mediaSource,
      numberOfKTP: this.createAccountForm.value.numberOfKTP,
      phoneNumber: this.createAccountForm.value.phoneNumber
    })
  }
}
