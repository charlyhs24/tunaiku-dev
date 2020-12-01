import { TestBed } from '@angular/core/testing';
import { LoanState } from './loan-state';

import { LoanService } from './loan.service';

describe('LoanService', () => {
  let loan: LoanService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanService]
    })
  });
  it('should be created', () => {
    // Arrange: setup services for test case
    let service: LoanService;

    // Act: invoke get Service method
    service = TestBed.get(LoanService);

    // Assert: check the service was created
    expect(service).toBeTruthy();
  });
  it('should correctly set new loan', () => {
    // Arrange: setup data for test case
    let MOCK_LOANS: LoanState = {
      fullName: 'Charly Haholongan Situmorang',
      loanAmount: 10000000,
      loanTerm: 12,
      mediaSource: 'internet',
      numberOfKTP: '1301150023',
      payPerMonth: 500000,
      phoneNumber: '08123123123123',
      serviceArea: '1'
    }
    loan = new LoanService();

    // Act: invoke addLoan method
    loan.setState(MOCK_LOANS);

    // Assert: check the state equal to MOCK_LOANS 
    expect(loan.state).toEqual(MOCK_LOANS);
  })
  it('should correctly add loan', () => {
    // Arrange: setup data for test case
    let MOCK_LOANS: LoanState = {
      fullName: 'Charly Haholongan Situmorang',
      loanAmount: 10000000,
      loanTerm: 12,
      mediaSource: 'internet',
      numberOfKTP: '1301150023',
      payPerMonth: 500000,
      phoneNumber: '08123123123123',
      serviceArea: '1'
    }
    loan = new LoanService();
    loan.setState(MOCK_LOANS);
    MOCK_LOANS.loanAmount = 500000000;
    MOCK_LOANS.loanTerm = 20;
    MOCK_LOANS.payPerMonth = 20000000;

    // Act: invoke addLoan method
    loan.addLoan(MOCK_LOANS.loanAmount, MOCK_LOANS.loanTerm, MOCK_LOANS.payPerMonth);

    // Assert: check the state equal to MOCK_LOANS 
    expect(loan.state).toEqual(MOCK_LOANS);
  });

  it('should correctly add user account', () => {
    // Arrange: setup data for test case
    let MOCK_LOANS: LoanState = {
      fullName: 'Charly Haholongan Situmorang',
      loanAmount: 10000000,
      loanTerm: 12,
      mediaSource: 'internet',
      numberOfKTP: '1301150023',
      payPerMonth: 500000,
      phoneNumber: '08123123123123',
      serviceArea: '1'
    }
    loan = new LoanService();
    loan.setState(MOCK_LOANS);
    MOCK_LOANS.fullName = 'PAPA TIBOB';
    MOCK_LOANS.numberOfKTP = '12301140023';
    MOCK_LOANS.phoneNumber = '08123123123';
    MOCK_LOANS.mediaSource = 'teman';

    // Act: invoke addUser method
    loan.addUserData(MOCK_LOANS.fullName, MOCK_LOANS.numberOfKTP, MOCK_LOANS.phoneNumber, MOCK_LOANS.mediaSource);

    // Assert: check the state equal to MOCK_LOANS 
    expect(loan.state).toEqual(MOCK_LOANS);
  });

  it('should correctly add service area', () => {
    // Arrange: setup data for test case
    let MOCK_LOANS: LoanState = {
      fullName: 'Charly Haholongan Situmorang',
      loanAmount: 10000000,
      loanTerm: 12,
      mediaSource: 'internet',
      numberOfKTP: '1301150023',
      payPerMonth: 500000,
      phoneNumber: '08123123123123',
      serviceArea: '1'
    }
    loan = new LoanService();
    loan.setState(MOCK_LOANS);
    MOCK_LOANS.serviceArea = '2';

    // Act: invoke addUser method
    loan.addServiceArea(MOCK_LOANS.serviceArea);

    // Assert: check the state equal to MOCK_LOANS 
    expect(loan.state).toEqual(MOCK_LOANS);
  });

  it('should correctly calculate monthly payment', () => {
    // Arrange: setup data for test case
    const loanAmount = 1000000;
    const loanTerm = 6;
    const expectResult = (loanAmount / loanTerm) * 1.04;
    loan = new LoanService();

    // Act: invoke addUser method
    const result = loan.monthlyPaymentCalculation(loanAmount, loanTerm);

    // Assert: check the state equal to MOCK_LOANS 
    expect(result).toEqual(expectResult);
  });
});
