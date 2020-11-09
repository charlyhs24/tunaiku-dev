import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan/loan.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
@Component({
  selector: 'app-confirm-service-area',
  templateUrl: './confirm-service-area.component.html',
  styleUrls: ['./confirm-service-area.component.scss']
})
export class ConfirmServiceAreaComponent implements OnInit {
  title:string="Area Layanan"
  ServiceAreaForm =  new FormGroup({
    city : new FormControl(''),
  });
  constructor(private loan:LoanService,private route: Router, private navbarService:NavbarService) { }
  ngOnInit() {
    this.navbarService.updateNavbarStatus(false);
    this.loan.state$.subscribe((state) => {
      console.log("check state value ");
      console.log(state);
    })
  }
  onSubmit(){
    this.loan.addServiceArea(this.ServiceAreaForm.value.city);
    this.route.navigate(['/create-account']);
  }
}
