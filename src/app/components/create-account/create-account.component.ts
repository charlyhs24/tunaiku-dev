import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan/loan.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  title: string = "Ajukan Pinjaman";
  CreateAccountForm = new FormGroup({
    FullName: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[A-Za-z -]+$')
      ]),
    NumberOfKTP: new FormControl('',
      [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        Validators.pattern('^[0-9]+$')
      ]),
    PhoneNumber: new FormControl('',
      [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        Validators.pattern('^[0-9]+$')
      ]),
    MediaSource: new FormControl('',Validators.required)
  });
  constructor(private loan: LoanService, private route: Router, private navbarService: NavbarService) { }
  get FullName() {
    return this.CreateAccountForm.get('FullName');
  }
  get NumberOfKTP() {
    return this.CreateAccountForm.get('NumberOfKTP');
  }
  get PhoneNumber() {
    return this.CreateAccountForm.get('PhoneNumber');
  }
  get MediaSource() {
    return this.CreateAccountForm.get('MediaSource');
  }
  ngOnInit() {
    this.navbarService.updateNavbarStatus(false);
    this.loan.state$.subscribe((state) => {
      console.log("check value account");
      console.log(state);
    })
  }
  onSubmit() {
    this.loan.addUserData(this.CreateAccountForm.value.FullName, this.CreateAccountForm.value.NumberOfKTP, this.CreateAccountForm.value.PhoneNumber, this.CreateAccountForm.value.MediaSource);
    this.route.navigate(['/success-submitted-data']);
  }
}
