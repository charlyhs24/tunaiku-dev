import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ICreateAccount } from 'src/app/services/loan/loan-state';

import { FormCreateAccountComponent } from './form-create-account.component';

describe('FormCreateAccountComponent', () => {
  let component: FormCreateAccountComponent;
  let fixture: ComponentFixture<FormCreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateAccountComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should send user account on submit', () => {
    // Arrange: setup data for test case
    const eventEmiter = new EventEmitter<ICreateAccount>();
    const MOCK_SUBMIT: ICreateAccount = {
      fullName: 'Charly Haholongan Situmorang',
      mediaSource: 'internet',
      numberOfKTP: '13012312321',
      phoneNumber: '0812321321'
    }
    eventEmiter.emit(MOCK_SUBMIT);

    // Act: invoke onSubmit method
    component.onSubmit();
    component.submitEvent.emit(MOCK_SUBMIT)

    // Assert: check the eventEmiter equal to MOCK_SUBMIT 
    expect(component.submitEvent).toEqual(eventEmiter)
  });
});
