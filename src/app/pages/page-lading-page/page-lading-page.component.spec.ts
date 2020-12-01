import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ILoanSlider } from 'src/app/services/loan/loan-state';

import { PageLadingPageComponent } from './page-lading-page.component';

describe('PageLadingPageComponent', () => {
  let component: PageLadingPageComponent;
  let fixture: ComponentFixture<PageLadingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageLadingPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should submit data loan to loan service and navigate to `confirm-service-area`', () => {
    // Arrange: setup data for test case
    const MOCK_LOAN_SLIDER: ILoanSlider = {
      loanAmount: 1000000,
      loanTerm: 6
    };
    spyOn(component.route, 'navigate').and.returnValue(Promise.resolve(true));

    // Act: invoke onSubmitLoanSlider method
    component.onSubmitLoanSlider(MOCK_LOAN_SLIDER)

    // Assert: check the state of loan amount and loanTerm equal to MOCK_USER_ACCOUNT 
    expect(component.loan.state.loanAmount).toEqual(MOCK_LOAN_SLIDER.loanAmount);
    expect(component.loan.state.loanTerm).toEqual(MOCK_LOAN_SLIDER.loanTerm);
    expect(component.route.navigate).toHaveBeenCalledWith(['/confirm-service-area']);
  })
});
