export interface ICreateAccount {
  fullName: string;
  numberOfKTP: string;
  phoneNumber: string;
  mediaSource: string;
}
export interface ILoanSlider {
  loanAmount: number;
  loanTerm: number;
}
export interface ILoanState {
  fullName: string;
  numberOfKTP: string;
  phoneNumber: string;
  mediaSource: string;
  serviceArea: string;
  loanAmount: number;
  loanTerm: number;
  payPerMonth: number;
}
export class LoanState implements ILoanState {
  fullName = '';
  numberOfKTP = '';
  phoneNumber = '';
  mediaSource = '';
  serviceArea = '';
  loanAmount = 0;
  loanTerm = 0;
  payPerMonth = 0;
}
