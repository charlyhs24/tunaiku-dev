import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan/loan.service';
@Component({
  selector: 'app-loan-slider',
  templateUrl: './loan-slider.component.html',
  styleUrls: ['./loan-slider.component.scss']
})
export class LoanSliderComponent implements OnInit {
  CreateSliderForm = new FormGroup({
    LoanAmount: new FormControl(2),
    LoanTerm: new FormControl(6),
  });
  constructor(private route: Router, private navbarService: NavbarService, private loanService: LoanService) { }

  ngOnInit() {
   
  }
  onSubmit() {
    this.navbarService.updateNavbarStatus(false);
    this.loanService.addLoan(this.CreateSliderForm.value.LoanAmount, this.CreateSliderForm.value.LoanTerm);
    this.route.navigate(['/confirm-service-area']);
  }
}
