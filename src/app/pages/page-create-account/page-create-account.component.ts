import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICreateAccount, ILoanState } from 'src/app/services/loan/loan-state';
import { LoanService } from 'src/app/services/loan/loan.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-page-create-account',
  templateUrl: './page-create-account.component.html',
  styleUrls: ['./page-create-account.component.scss']
})
export class PageCreateAccountComponent implements OnInit {
  title: string = "Ajukan Pinjaman";
  loanState$: Observable<ILoanState>;
  constructor(private navbarService: NavbarService, private loan: LoanService, private route: Router) {
    this.navbarService.updateNavbarStatus(false);
  }
  ngOnInit() {
    this.loanState$ = this.loan.state$;
    this.navbarService.updateNavbarStatus(false);
  }
  onSubmitCreateAccount(userData: ICreateAccount) {
    this.loan.addUserData(userData.fullName, userData.numberOfKTP, userData.phoneNumber, userData.mediaSource);
    this.route.navigate(['/success-submitted-data']);
  }
}
