export class LoanState {
  userData: {
    fullName: string;
    numberOfKTP: string;
    phoneNumber: string;
    mediaSource: string;
  };
  loan: {
    amount: number;
    term: number;
  }
  serviceArea: string;
}
