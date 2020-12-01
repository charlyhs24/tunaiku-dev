import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoanState } from 'src/app/services/loan/loan-state';
import { LoanService } from 'src/app/services/loan/loan.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-page-success-submitted-data',
  templateUrl: './page-success-submitted-data.component.html',
  styleUrls: ['./page-success-submitted-data.component.scss']
})
export class PageSuccessSubmittedDataComponent implements OnInit {
  loanStat$: Observable<ILoanState>;
  constructor(public loan: LoanService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.updateNavbarStatus(false);
    this.loanStat$ = this.loan.state$;
  }

}
