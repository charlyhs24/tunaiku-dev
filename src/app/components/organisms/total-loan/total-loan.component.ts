import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-loan',
  templateUrl: './total-loan.component.html',
  styleUrls: ['./total-loan.component.scss']
})
export class TotalLoanComponent implements OnInit {
  @Input() 
  totalLoan:number;
  @Input()
  termOfLoan:number;
  @Input()
  payPerMonth:number;
  constructor() { }

  ngOnInit() {
  }

}
