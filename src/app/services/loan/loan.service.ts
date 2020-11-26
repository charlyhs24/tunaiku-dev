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
  addUserData(fullName: string, numberOfKTP: string, phoneNumber: string, mediaSource: string): void {
    this.setState({
      ...this.state,
      userData: { ...this.state.userData, fullName: fullName, numberOfKTP: numberOfKTP, phoneNumber: phoneNumber, mediaSource: mediaSource }
    });
  }
  addLoan(loanAmount: number, loanTerm: number): void {
    this.setState({
      ...this.state,
      loan: { ...this.state, amount: loanAmount, term: loanTerm }
    });
  }
  addServiceArea(serviceArea: string): void {
    this.setState({
      ...this.state,
      serviceArea: serviceArea
    });
  }
}
