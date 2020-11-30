import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoanSlider } from 'src/app/services/loan/loan-state';
import { LoanService } from 'src/app/services/loan/loan.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-page-lading-page',
  templateUrl: './page-lading-page.component.html',
  styleUrls: ['./page-lading-page.component.scss']
})
export class PageLadingPageComponent implements OnInit {

  constructor(private loan: LoanService, private route: Router, private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.updateNavbarStatus(true);
  }
  onSubmitLoanSlider(loanState: ILoanSlider) {
    if (loanState) {
      const payPerMonth = this.loan.monthlyPaymentCalculation(loanState.loanAmount, loanState.loanTerm);
      this.loan.addLoan(loanState.loanAmount, loanState.loanTerm, payPerMonth);
      this.route.navigate(['/confirm-service-area']);
    }
  }
}
