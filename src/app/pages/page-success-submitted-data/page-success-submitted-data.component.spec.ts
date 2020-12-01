import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Subject } from 'rxjs';
import { ILoanState, LoanState } from 'src/app/services/loan/loan-state';

import { PageSuccessSubmittedDataComponent } from './page-success-submitted-data.component';

describe('PageSuccessSubmittedDataComponent', () => {
  let component: PageSuccessSubmittedDataComponent;
  let fixture: ComponentFixture<PageSuccessSubmittedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageSuccessSubmittedDataComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuccessSubmittedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render page success submit data and return data loan from loan service', () => {
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
    component.loan.setState(MOCK_LOANS);
    const observer$: Observable<LoanState> = new Observable(observer => {
      observer.next(MOCK_LOANS)
    });

    // Act: invoke ngOnInit method
    component.ngOnInit();

    // Assert: check the state equal to MOCK_LOANS 
    expect(component.loan.state).toEqual(MOCK_LOANS);
  })
});
