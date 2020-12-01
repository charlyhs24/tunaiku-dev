import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ILoanSlider } from 'src/app/services/loan/loan-state';

import { LoanSliderComponent } from './loan-slider.component';

describe('LoanSliderComponent', () => {
  let component: LoanSliderComponent;
  let fixture: ComponentFixture<LoanSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanSliderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should send data loan on submit', () => {
    // Arrange: setup data for test case
    const eventEmiter = new EventEmitter<ILoanSlider>();
    const MOCK_SUBMIT: ILoanSlider = {
      loanAmount: 1000000,
      loanTerm: 6,
    }
    eventEmiter.emit(MOCK_SUBMIT);

    // Act: invoke onSubmit method
    component.onSubmit();
    component.submitEventLoanSlider.emit(MOCK_SUBMIT)

    // Assert: check the eventEmiter equal to MOCK_SUBMIT 
    expect(component.submitEventLoanSlider).toEqual(eventEmiter)
  });
});
