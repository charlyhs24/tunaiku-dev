import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ICreateAccount } from 'src/app/services/loan/loan-state';

import { PageCreateAccountComponent } from './page-create-account.component';

describe('PageCreateAccountComponent', () => {
  let component: PageCreateAccountComponent;
  let fixture: ComponentFixture<PageCreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageCreateAccountComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should submit user account to loan service and navigate to `success-submitted-data`', () => {
    // Arrange: setup data for test case
    const MOCK_USER_ACCOUNT: ICreateAccount = {
      fullName: 'Charly Haholongan Situmorang',
      mediaSource: 'internet',
      numberOfKTP: '0812321312',
      phoneNumber: '018231232132'
    };
    spyOn(component.route, 'navigate').and.returnValue(Promise.resolve(true));

    // Act: invoke onSubmitCreateAccount method
    component.onSubmitCreateAccount(MOCK_USER_ACCOUNT)

    // Assert: check the state equal to MOCK_USER_ACCOUNT 
    expect(component.loan.state.mediaSource).toEqual(MOCK_USER_ACCOUNT.mediaSource);
    expect(component.loan.state.mediaSource).toEqual(MOCK_USER_ACCOUNT.mediaSource);
    expect(component.loan.state.numberOfKTP).toEqual(MOCK_USER_ACCOUNT.numberOfKTP);
    expect(component.loan.state.phoneNumber).toEqual(MOCK_USER_ACCOUNT.phoneNumber);
    expect(component.route.navigate).toHaveBeenCalledWith(['/success-submitted-data']);
  })
});
