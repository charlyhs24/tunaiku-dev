import { Injectable } from '@angular/core';
import { Store } from '../store';
import { LoanState } from './loan-state';

@Injectable({
  providedIn: 'root'
})
export class LoanService extends Store<LoanState> {

  constructor() {
    super(new LoanState());
  }
  // untuk handle state , buat class baru (LoanStore)
  addUserData(fullName: string, numberOfKTP: string, phoneNumber: string, mediaSource: string): void {
    this.setState({
      ...this.state,
      fullName: fullName,
      numberOfKTP: numberOfKTP,
      phoneNumber: phoneNumber,
      mediaSource: mediaSource
    });
  }
  addLoan(loanAmount: number, loanTerm: number, payPerMonth: number): void {
    this.setState({
      ...this.state,
      loanAmount: loanAmount,
      loanTerm: loanTerm,
      payPerMonth: payPerMonth
    });
  }
  addServiceArea(serviceArea: string): void {
    this.setState({
      ...this.state,
      serviceArea: serviceArea
    });
  }


  // buat class baru loan service
  monthlyPaymentCalculation(loanAmount: number, period: number): number {
    return (loanAmount / period) * 1.04;
  }
}
