import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan/loan.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-page-confirm-service-area',
  templateUrl: './page-confirm-service-area.component.html',
  styleUrls: ['./page-confirm-service-area.component.scss']
})
export class PageConfirmServiceAreaComponent implements OnInit {
  title = "Area Layanan";
  constructor(public loan: LoanService, public route: Router, private navbarService: NavbarService) {
  }
  ngOnInit() {
    this.navbarService.updateNavbarStatus(false);
  }
  onSubmit(city: string) {
    this.loan.addServiceArea(city);
    this.route.navigate(['/create-account']);
  }
}
